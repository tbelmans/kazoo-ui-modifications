winkstart.module("voip", "cdr", {
    css: ["css/cdr.css"],
    templates: {
        cdr: "tmpl/cdr.html",
        cdr_details: "tmpl/cdr_details.html"
    },
    subscribe: {
        "cdr.activate": "activate"
    },
    resources: {
        "cdr.list": {
            url: "{api_url}/accounts/{account_id}/cdrs",
            contentType: "application/json",
            verb: "GET"
        },
        "cdr.read": {
            url: "{api_url}/accounts/{account_id}/cdrs/{cdr_id}",
            contentType: "application/json",
            verb: "GET"
        },
        "cdr.list_by_week": {
            url: "{api_url}/accounts/{account_id}/cdrs?created_from={created_from}&created_to={created_to}",
            contentType: "application/json",
            verb: "GET"
        },
        "cdr.from_queue": {
            url: "{api_url}/accounts/{account_id}/cdrs?created_from={created_from}&created_to={created_to}&has_key={filter}",
            contentType: "application/json",
            verb: "GET"
        },
        "cdr.not_from_queue": {
            url: "{api_url}/accounts/{account_id}/cdrs?created_from={created_from}&created_to={created_to}&key_missing={filter}",
            contentType: "application/json",
            verb: "GET"
        }
    }
}, function(e) {
    winkstart.registerResources(this.__whapp, this.config.resources), winkstart.publish("whappnav.subnav.add", {
        whapp: "voip",
        module: this.__module,
        label: _t("cdr", "call_history_label"),
        icon: "cdr",
        weight: "50",
        category: _t("config", "advanced_menu_cat")
    })
}, {
    cdr_range: 7,
    list_by_date: function(e, t, n) {
        var r = this,
            n = n || "",
            i = {},
            s = function(e, t) {
                var e = parseFloat(e);
                return seconds = e % 60, minutes = (e - seconds) / 60 % 60, hours = Math.floor((e - seconds) / 3600), t = t || "numbers", hours < 10 && t == "numbers" && (hours = "0" + hours), minutes < 10 && (minutes = "0" + minutes), seconds < 10 && (seconds = "0" + seconds), t == "verbose" ? e = hours + " hours " + minutes + " minutes and " + seconds + " seconds" : e = hours + ":" + minutes + ":" + seconds, e
            },
            o = function(e) {
                var t = "";
                return e && i[e] && (t = i[e].first_name + " " + i[e].last_name), t
            },
            u = function(e) {
                var t = "-";
                if (e) {
                    var n = new Date((e - 62167219200) * 1e3),
                        r = n.getMonth() + 1,
                        i = n.getFullYear(),
                        s = n.getDate(),
                        o = r + "/" + s + "/" + i,
                        u = n.toLocaleTimeString();
                    t = o + " " + u
                }
                return t
            },
            a = function(e) {
                return e.substr(0, 1) + "/" + e.substr(1, 1) + "/" + e.substr(2, 1) + "/" + e
            };
        winkstart.parallel({
            user_list: function(e) {
                winkstart.request(!0, "user.list", {
                    account_id: winkstart.apps.voip.account_id,
                    api_url: winkstart.apps.voip.api_url
                }, function(t, n) {
                    $.each(t.data, function() {
                        i[this.id] = this
                    }), e(null, t)
                })
            },
            cdr_list: function(r) {
                var i = "cdr.list_by_week",
                    s = {
                        account_id: winkstart.apps.voip.account_id,
                        api_url: winkstart.apps.voip.api_url,
                        created_from: e,
                        created_to: t
                    };
                n === "queue" ? (i = "cdr.from_queue", s.filter = "custom_channel_vars.queue_id") : n === "non-queue" && (i = "cdr.not_from_queue", s.filter = "custom_channel_vars.queue_id"), winkstart.request(!0, i, s, function(e, t) {
                    r(null, e)
                })
            }
        }, function(e, t) {
            var n, r, i, f, l, c, h = 0,
                p, d = [];
            $.each(t.cdr_list.data, function() {
		//alert(this.toSource());
                n = this.cid || this.id, i = this.owner_id ? o(this.owner_id) : "", f = this.duration_seconds >= 0 ? s(this.duration_seconds) : "--", l = u(this.timestamp), c = a(n), h += this.billing_seconds >= 0 ? parseFloat(this.billing_seconds) : 0, p = this.cost ? "$" + parseFloat(this.cost / 1e4).toFixed(2) : "-", d.push([this.caller_id_number === this.caller_id_name ? this.caller_id_number || _t("cdr", "empty") : this.caller_id_number + " (" + this.caller_id_name + ")", this.callee_id_number === this.callee_id_name ? this.callee_id_number || (this.to ? this.to.substring(0, this.to.indexOf("@") != -1 ? this.to.indexOf("@") : this.to.length) : _t("cdr", "empty")) || _t("cdr", "empty") : this.callee_id_number + " (" + this.callee_id_name + ")", i ? '<a href="javascript:void(0);" id="' + this.owner_id + '" class="table_owner_link">' + i + "</a>" : _t("cdr", "no_owner"), f || "-", this.hangup_cause || "-", '<a href="javascript:void(0);" data-cdr_id="' + n + '"  class="table_detail_link">' + _t("cdr", "details") + "</a>", p, l, n, this.billing_seconds || ""])
            }), h = _t("cdr", "total_duration") + s(h, "verbose"), $(".call_duration", "#cdr-grid_wrapper").text(h), winkstart.table.cdr.fnAddData(d)
        })
    },
    init_table: function(e) {
        var t = e,
            n = [{
                sTitle: _t("cdr", "from_caller_id_stitle"),
                sWidth: "250px"
            }, {
                sTitle: _t("cdr", "to_dialed_number_stitle"),
                sWidth: "250px"
            }, {
                sTitle: _t("cdr", "owner_stitle"),
                sWidth: "160px"
            }, {
                sTitle: _t("cdr", "duration_stitle"),
                sWidth: "110px"
            }, {
                sTitle: _t("cdr", "hangup_cause_stitle"),
                sWidth: "160px"
            }, {
                sTitle: _t("cdr", "actions_stitle"),
                sWidth: "80px",
                bSortable: !1
            }, {
                sTitle: _t("cdr", "cost_stitle")
            }, {
                sTitle: _t("cdr", "date_stitle")
            }, {
                sTitle: _t("cdr", "cdr_id_stitle"),
                bVisible: !1
            }, {
                sTitle: _t("cdr", "billing_seconds_stitle"),
                bVisible: !1
            }];
        winkstart.table.create("cdr", $("#cdr-grid", t), n, {}, {
            sDom: '<"date">frtlip',
            aaSorting: [
                [7, "desc"]
            ]
        }), $(".cancel-search", t).click(function() {
            $("#registration-grid_filter input[type=text]", t).val(""), winkstart.table.cdr.fnFilter("")
        })
    },
    parse_data_cdr: function(e) {
        function i(e) {
            return e = winkstart.config.hide_fqdn ? e.replace(".2600hz.com", "") : e
        }
        var t = [],
            n, r = this;
        return $.each(e, function(e, s) {
            typeof s == "object" ? (n = r.parse_data_cdr(this), $.each(n, function(e, n) {
                jQuery.inArray(n.key, ["app_name", "app_version", "server_id", "id"]) < 0 && (n.value = i(n.value), t.push({
                    key: n.key,
                    value: n.value
                }))
            })) : jQuery.inArray(e, ["app_name", "app_version", "server_id", "id"]) < 0 && (s = i(s), t.push({
                key: e,
                value: s
            }))
        }), t
    },
    activate: function(e) {
        var t = this,
            n = this.templates.cdr.tmpl({}),
            r = 1,
            i = t.cdr_range;
        $("#ws-content").empty().append(n), t.init_table(n), $.fn.dataTableExt.afnFiltering.pop(), $("div.date", n).html(_t("cdr", "start_date") + '<input id="startDate" readonly="readonly" type="text"/>&nbsp;&nbsp;' + _t("cdr", "end_date") + '<input id="endDate" readonly="readonly" type="text"/>&nbsp;&nbsp;&nbsp;&nbsp;<select id="dropdown_filter"><option value="all">' + _t("cdr", "all_calls") + '</option><option value="queue">' + _t("cdr", "queue_calls") + '</option><option value="non-queue">' + _t("cdr", "non_queue_calls") + '</option></select><button class="btn primary button-search" id="searchLink">' + _t("cdr", "filter") + '</button><label class="call_duration"/>'), $(n).delegate(".table_owner_link", "click", function() {
            winkstart.publish("user.popup_edit", {
                id: $(this).attr("id")
            })
        }), $("#cdr-grid_filter input[type=text]", "#cdr-grid_wrapper").keyup(function() {
            $(this).val() != "" ? $(".call_duration", "#cdr-grid_wrapper").hide() : $(".call_duration", "#cdr-grid_wrapper").show()
        }), "call_center" in winkstart.apps || $("#dropdown_filter", n).hide(), $(n).delegate(".table_detail_link", "click", function() {
            var e = $(this).dataset("cdr_id");
            winkstart.request(!0, "cdr.read", {
                account_id: winkstart.apps.voip.account_id,
                api_url: winkstart.apps.voip.api_url,
                cdr_id: e
            }, function(n, r) {
                var i = t.parse_data_cdr(n.data);
                i = i.sort(function(e, t) {
                    var n = e.key.toLowerCase(),
                        r = t.key.toLowerCase();

                    return n <= r ? -1 : 1
                });

		/* Get media_transfer_destination */
		var transfer_destination = "";
		for(var x in i){
		  if (i[x].key === 'media_transfer_destination') {
			transfer_destination = i[x].value;	
		  }
		}

		/* Create download link */
		for(var x in i){
		  if (i[x].key === 'media_name') {
			i[x].value = '<a target="_new" href="' + transfer_destination + i[x].value.substr(15) + '">Download file: ' + i[x].value.substr(15) + '</a>';
		  }
		}

                var s = {
                    cdr_fields: i,
                    _t: function(e) {
                        return window.translate.cdr[e]
                    }
                };
                cdr_detail_html = t.templates.cdr_details.tmpl(s), winkstart.dialog(cdr_detail_html, {
                    title: _t("cdr", "detail_of_cdr_title") + e,
                    width: "840px",
                    height: "auto",
                    open: function() {
                        $(this).css("overflow-x", "hidden"), $(this).css("max-height", $(document).height() - 180)
                    }
                })
            })
        }), $("#searchLink", n).click(function() {
            var e = $("#startDate", n).val(),
                r = $("#endDate", n).val(),
                s = /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d$/;
            winkstart.table.cdr.fnClearTable(), $(".call_duration", "#cdr-grid_wrapper").text("");
            if (e.match(s) && r.match(s)) {
                var o = (new Date(e)).getTime() / 1e3 + 62167219200,
                    u = (new Date(r)).getTime() / 1e3 + 62167219200;
                u - o <= i * 24 * 60 * 60 ? t.list_by_date(o, u, $("#dropdown_filter", n).val()) : winkstart.alert(_t("cdr", "the_range_is_bigger"))
            } else winkstart.alert(_t("cdr", "dates_in_the_filter"))
        }), t.init_datepicker(n);
        var s = new Date(t.to_string_date(new Date));
        s.setDate(s.getDate() + 1);
        var o = Math.floor(s.getTime() / 1e3) + 62167219200,
            u = o - r * 24 * 60 * 60;
        t.list_by_date(u, o)
    },
    init_datepicker: function(e) {
        function l(e, n) {
            var s, o;
            if (n.id == "startDate") {
                s = r.datepicker("getDate");
                if (i.datepicker("getDate") == null) o = s, o.setDate(s.getDate() + f), i.val(t.to_string_date(o));
                else {
                    o = i.datepicker("getDate");
                    if (o > (new Date(s)).setDate(s.getDate() + f) || o <= s) o = s, o.setDate(o.getDate() + f), o > u ? o = u : !0, i.val(t.to_string_date(o))
                }
            } else n.id == "endDate" && r.datepicker("getDate") == null && (s = i.datepicker("getDate"), s.setDate(s.getDate() - 1), r.val(t.to_string_date(s)))
        }

        function c(e) {
            var n = new Date(2011, 0, 0),
                i, s = t.cdr_range;
            return e.id == "endDate" ? (i = u, r.datepicker("getDate") != null && (n = r.datepicker("getDate"), n.setDate(n.getDate() + 1), i = r.datepicker("getDate"), i.setDate(i.getDate() + s), i > u && (i = u))) : e.id == "startDate" && (i = new Date), {
                minDate: n,
                maxDate: i
            }
        }
        var t = this,
            n = e,
            r = $("#startDate", n),
            i = $("#endDate", n),
            s = new Date,
            o, u = new Date,
            a = 1,
            f = t.cdr_range;
        u.setDate(u.getDate() + 1), $("#startDate, #endDate", n).datepicker({
            beforeShow: c,
            onSelect: l
        }), o = u, s.setDate((new Date).getDate() - a + 1), r.datepicker("setDate", s), i.datepicker("setDate", o)
    },
    to_string_date: function(e) {
        var t = e.getDate(),
            n = e.getMonth() + 1,
            r = e.getFullYear();
        return t < 10 ? t = "0" + t : !0, n < 10 ? n = "0" + n : !0, n + "/" + t + "/" + r
    }
});
