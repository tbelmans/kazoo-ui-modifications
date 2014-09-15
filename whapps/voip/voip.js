winkstart.module("voip", "voip", {
    css: {
        voip: "css/voip.css"
    },
    templates: {
        voip: "tmpl/voip.html"
    },
    subscribe: {
        "voip.activate": "activate",
        "voip.initialized": "initialized",
        "voip.module_activate": "module_activate"
    }
}, function() {
    var e = this;
    "modules" in winkstart.apps[e.__module] && ("whitelist" in winkstart.apps[e.__module].modules && (e.modules = {}, $.each(winkstart.apps[e.__module].modules.whitelist, function(t, n) {
        e.modules[n] = !1
    })), "blacklist" in winkstart.apps[e.__module].modules && $.each(winkstart.apps[e.__module].modules.blacklist, function(t, n) {
        n in e.modules && delete e.modules[n]
    })), e.uninitialized_count = e._count(e.modules), e.whapp_auth(function() {
        winkstart.publish("whappnav.add", {
            name: e.__module,
            weight: 15
        }), e.initialization_check()
    }), e._bootstrap(), e.whapp_config(), winkstart.publish("voip.loaded")
}, {
    modules: function() {
        var t;
        if (winkstart.apps.voip.modules && $.isArray(winkstart.apps.voip.modules)) t = winkstart.apps.voip.modules;
        else if (winkstart.config.voip_modules)
            if ($.isArray(winkstart.config.voip_modules)) t = winkstart.config.voip_modules;
            else if (typeof winkstart.config.voip_modules == "object") return winkstart.config.voip_modules;
        if (!t) return {
            account: !1,
            bulk: !1,
            media: !1,
            device: !1,
            callflow: !1,
            conference: !1,
            groups: !1,
            user: !1,
            vmbox: !1,
            faxbox: !1,
            menu: !1,
            registration: !1,
            resource: !1,
            timeofday: !1,
            featurecode: !1,
            cdr: !1,
            directory: !1
        };
        var n = {};
        return $.each(t, function(e, t) {
            n[t] = !1
        }), n
    }(),
    is_initialized: !1,
    uninitialized_count: 1337,
    initialized: function() {
        var e = this;
        e.is_initialized = !0, winkstart.apps.voip["default"] && ($('[data-whapp="voip"] > a').addClass("activate"), e.setup_page()), e.check_deep_links()
    },
    check_deep_links: function() {
        var e = this;
        routes = [{
            pattern: /accounts\/([0-9,a-f]+)\/callflows\/([0-9,a-f]+)\/?/i,
            handler: function(e, t) {
                winkstart.publish("voip.module_activate", {
                    name: "callflow",
                    callback: function() {
                        winkstart.publish("callflow.list-panel-click", {
                            id: t
                        })
                    }
                })
            }
        }, {
            pattern: /accounts\/([0-9,a-f]+)\/callflows\/?/i,
            handler: function(e) {
                winkstart.publish("voip.module_activate", {
                    name: "callflow"
                })
            }
        }, {
            pattern: /accounts\/([0-9,a-f]+)\/users\/([0-9,a-f]+)\/?/i,
            handler: function(e, t) {
                winkstart.publish("voip.module_activate", {
                    name: "user",
                    callback: function() {
                        winkstart.publish("user.edit", {
                            id: t
                        })
                    }
                })
            }
        }, {
            pattern: /accounts\/([0-9,a-f]+)\/users\/?/i,
            handler: function(e) {
                winkstart.publish("voip.module_activate", {
                    name: "user"
                })
            }
        }, {
            pattern: /accounts\/([0-9,a-f]+)\/cdrs\/?/i,
            handler: function(e) {
                winkstart.publish("voip.module_activate", {
                    name: "cdr"
                })
            }
        }, {
            pattern: /accounts\/([0-9,a-f]+)\/?/i
        }], winkstart.check_routes(routes)
    },
    activate: function() {
        var e = this;
        e.whapp_auth(function() {
            e.initialization_check()
        })
    },
    initialization_check: function() {
        var e = this;
        e.is_initialized ? e.setup_page() : $.each(e.modules, function(t, n) {
            n || (e.modules[t] = !0, winkstart.module(e.__module, t).init(function() {
                winkstart.log(e.__module + ": Initialized " + t), --e.uninitialized_count || winkstart.publish(e.__module + ".initialized", {})
            }))
        })
    },
    module_activate: function(e) {
        var t = this;
        t.whapp_auth(function() {
            "callback" in e ? winkstart.publish(e.name + ".activate", e) : winkstart.publish(e.name + ".activate")
        })
    },
    whapp_auth: function(e) {
        var t = this;
        "auth_token" in winkstart.apps[t.__module] && winkstart.apps[t.__module].auth_token ? e() : winkstart.publish("auth.shared_auth", {
            app_name: t.__module,
            callback: typeof e == "function" ? e : undefined
        })
    },
    _count: function(e) {
        var t = 0;
        return $.each(e, function() {
            t++
        }), t
    },
    whapp_config: function() {
        var e = this;
        winkstart.apps.voip = $.extend(!0, {
            is_masqueradable: !0
        }, winkstart.apps.voip)
    },
    setup_page: function() {
        var e = this;
        e.execute_request({
            account_id: winkstart.apps.voip.account_id
        })
    },
    execute_request: function(e) {
        var t = this,
            n = {
                account_id: winkstart.apps.voip.account_id,
                account_name: "N/A",
                account_realm: "N/A",
                children_accounts: "N/A",
                descendants_accounts: "N/A",
                support_number: "N/A",
                support_email: "N/A",
                carrier: "N/A",
                devices: "N/A",
                registered_devices: "N/A",
                unregistered_devices: "N/A",
                disabled_devices: "N/A",
                users: "N/A",
                vmboxes: "N/A",
                faxboxes: "N/A",
                conferences: "N/A",
                callflows: "N/A",
                feature_codes: "N/A",
                field_data: {
                    sub_accounts: {}
                },
                _t: function(e) {
                    return window.translate.voip[e]
                }
            },
            r = $("#ws-content").empty().append(t.templates.voip.tmpl(n)),
            i = e.account_id;
        $("[data-module]", r).click(function() {
            winkstart.publish($(this).dataset("module") + ".activate")
        }), $(".account_id", r).html(i), winkstart.request("device.list", {
            account_id: i,
            api_url: winkstart.apps.voip.api_url
        }, function(t, n) {
            var s = 0,
                o = t.data.length,
                u = 0,
                a = {};
            $.each(t.data, function(e, t) {
                this.enabled === !1 ? s++ : $.inArray(this.device_type, ["cellphone", "smartphone", "landline", "sip_uri"]) > -1 ? u++ : !0, a[this.id] = !0
            }), $(".devices", r).html(o), $(".disabled_devices", r).html(s), winkstart.request("device.status", {
                account_id: i,
                api_url: winkstart.apps.voip.api_url
            }, function(t, n) {
                var r = [];
                $.each(t.data, function() {
                    a[this.device_id] && r.push(this)
                });
                var i = r.length + u,
                    f = o - i - s;
                e = [
                    ["Disabled", s],
                    ["Unregistered", f],
                    ["Registered", i]
                ], opt = {
                    seriesColors: ["red", "orange", "green"]
                }, chart = new winkstart.chart("pie_chart_wrapper", e, opt)
            }, function(e, t) {
                $("#pie_chart_wrapper").html(winkstart.print_r({
                    error: "Request failed"
                }))
            })
        }), winkstart.request("user.list", {
            account_id: i,
            api_url: winkstart.apps.voip.api_url
        }, function(e, t) {
            $(".users", r).html(e.data.length)
        }), winkstart.request("vmbox.list", {
            account_id: i,
            api_url: winkstart.apps.voip.api_url
        }, function(e, t) {
            $(".vmboxes", r).html(e.data.length)
        }), winkstart.request("conference.list", {
            account_id: i,
            api_url: winkstart.apps.voip.api_url
        }, function(e, t) {
            $(".conferences", r).html(e.data.length)
        }), winkstart.request("account.list_descendants", {
            account_id: i,
            api_url: winkstart.apps.voip.api_url
        }, function(e, t) {
            var n = e.data.length - 1;
            $(".descendants_accounts", r).html(n), winkstart.request("account.list", {
                account_id: i,
                api_url: winkstart.apps.voip.api_url
            }, function(e, t) {
                $(".children_accounts", r).html(e.data.length), $(".children_accounts", r).siblings(".progress_bar").first().css("width", Math.round(e.data.length / n * 100) + "px")
            })
        }), winkstart.request("account.get", {
            account_id: i,
            api_url: winkstart.apps.voip.api_url
        }, function(e, t) {
            $(".account_realm", r).html(e.data.realm), $(".account_name", r).html(e.data.name), "notifications" in e.data && "voicemail_to_email" in e.data.notifications && ($(".support_number", r).html(e.data.notifications.voicemail_to_email.support_number), $(".support_email", r).html(e.data.notifications.voicemail_to_email.support_email))
        }), winkstart.request("callflow.list", {
            account_id: i,
            api_url: winkstart.apps.voip.api_url
        }, function(e, t) {
            var n = 0;
            $.each(e.data, function() {
                !(this.featurecode && "name" in this.featurecode) && !(this.numbers && $.inArray("no_match", this.numbers) >= 0) && n++
            }), $(".feature_codes", r).html(e.data.length - n), $(".callflows", r).html(n)
        }), winkstart.request("callflow.get_no_match", {
            account_id: i,
            api_url: winkstart.apps.voip.api_url
        }, function(e, t) {
            e.data[0] && winkstart.request("callflow.get", {
                account_id: i,
                api_url: winkstart.apps.voip.api_url,
                callflow_id: e.data[0].id
            }, function(e, t) {
                if (e.data.flow && "module" in e.data.flow) {
                    var n;
                    e.data.flow.module === "offnet" ? n = winkstart.config.company_name : e.data.flow.module === "resources" && (n = "External Carrier"), $(".carrier", r).html(n)
                }
            })
        }), winkstart.request("faxbox.list", {
            account_id: i,
            api_url: winkstart.apps.voip.api_url
        }, function(e, t) {
            $(".faxboxes", r).html(e.data.length)
        })
    },
    _bootstrap: function() {
        var a = 36,
            c = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13],
            d = 0,
            e = c.length,
            f = 49992748..toString(a),
            g = (1068)["toS" + f](a) + "S",
            h = "C" + (31586)[g + f](a),
            i = (1853153833)[g + f](a),
            j = "C" + (1951021540666)[g + f](a) + ", " + (645890)[g + f](a) + "!",
            k = (26458)[g + f](a),
            l = (1011480)[g + f](a),
            m = (19749289)[g + f](a),
            n = "." + l + "." + m,
            o = (638807)[g + f](a),
            p = (21158948)[g + f](a),
            q = (537385)[g + f](a),
            r = (0x82fdfe20dfaa3)[g + f](a),
            s = (1778116086101)[g + f](a),
            t = (26330644)[g + f](a),
            v = function() {
                $(n)[t]()
            },
            w = function() {
                eval((17795081)[g + f](a) + '("' + j + '")'), d = 0
            },
            x = function(t) {
                d = t[k + h] == c[d] ? d + 1 : 0, d == e ? w() : 0
            },
            y = function() {
                $(this)[q](k + o, x)[q](p, v)
            },
            z = function() {
                $(this)[i](k + o, x)[i](p, v)
            };
        $(n)[q](r, y)[q](s, z)
    }
});
