winkstart.module("voip", "device", {
    css: ["css/device.css"],
    templates: {
        device: "tmpl/device.html",
        general_edit: "tmpl/general_edit.html",
        smartphone: "tmpl/smartphone.html",
        landline: "tmpl/landline.html",
        cellphone: "tmpl/cellphone.html",
        softphone: "tmpl/softphone.html",
        mobile: "tmpl/mobile.html",
        sip_device: "tmpl/edit.html",
        fax: "tmpl/fax.html",
        device_callflow: "tmpl/device_callflow.html",
        sip_uri: "tmpl/sip_uri.html"
    },
    subscribe: {
        "device.activate": "activate",
        "device.edit": "edit_device",
        "callflow.define_callflow_nodes": "define_callflow_nodes",
        "device.popup_edit": "popup_edit_device"
    },
    validation: {
        sip_uri: [{
            name: "#name",
            regex: _t("device", "sip_uri_name_regex")
        }],
        sip_device: [{
            name: "#name",
            regex: _t("device", "name_regex")
        }, {
            name: "#mac_address",
            regex: /^(((\d|([a-f]|[A-F])){2}:){5}(\d|([a-f]|[A-F])){2})$|^$|^(((\d|([a-f]|[A-F])){2}-){5}(\d|([a-f]|[A-F])){2})$|^(((\d|([a-f]|[A-F])){2}){5}(\d|([a-f]|[A-F])){2})$/
        }, {
            name: "#caller_id_name_internal",
            regex: _t("device", "caller_id_name_regex")
        }, {
            name: "#caller_id_number_internal",
            regex: /^[\+]?[0-9\s\-\.\(\)]*$/
        }, {
            name: "#caller_id_name_external",
            regex: _t("device", "caller_id_name_regex")
        }, {
            name: "#caller_id_number_external",
            regex: /^[\+]?[0-9\s\-\.\(\)]*$/
        }, {
            name: "#caller_id_number_emergency",
            regex: /^[\+]?[0-9\s\-\.\(\)]*$/
        }, {
            name: "#caller_id_name_emergency",
            regex: _t("device", "caller_id_name_regex")
        }, {
            name: "#sip_username",
            regex: /^[^\s]+$/
        }, {
            name: "#sip_expire_seconds",
            regex: /^[0-9]+$/
        }],
        fax: [{
            name: "#name",
            regex: _t("device", "name_regex")
        }, {
            name: "#mac_address",
            regex: /^(((\d|([a-f]|[A-F])){2}:){5}(\d|([a-f]|[A-F])){2})$|^$|^(((\d|([a-f]|[A-F])){2}-){5}(\d|([a-f]|[A-F])){2})$|^(((\d|([a-f]|[A-F])){2}){5}(\d|([a-f]|[A-F])){2})$/
        }, {
            name: "#caller_id_name_internal",
            regex: _t("device", "caller_id_name_regex")
        }, {
            name: "#caller_id_number_internal",
            regex: /^[\+]?[0-9\s\-\.\(\)]*$/
        }, {
            name: "#caller_id_name_external",
            regex: _t("device", "caller_id_name_regex")
        }, {
            name: "#caller_id_number_external",
            regex: /^[\+]?[0-9\s\-\.\(\)]*$/
        }, {
            name: "#caller_id_number_emergency",
            regex: /^[\+]?[0-9\s\-\.\(\)]*$/
        }, {
            name: "#caller_id_name_emergency",
            regex: _t("device", "caller_id_name_regex")
        }, {
            name: "#sip_username",
            regex: /^[^\s]+$/
        }, {
            name: "#sip_expire_seconds",
            regex: /^[0-9]+$/
        }],
        cellphone: [{
            name: "#name",
            regex: _t("device", "name_regex")
        }, {
            name: "#call_forward_number",
            regex: /^[\+]?[0-9\s\-\.\(\)]*$/
        }],
        smartphone: [{
            name: "#name",
            regex: _t("device", "name_regex")
        }, {
            name: "#call_forward_number",
            regex: /^[\+]?[0-9\s\-\.\(\)]*$/
        }],
        landline: [{
            name: "#name",
            regex: _t("device", "name_regex")
        }, {
            name: "#call_forward_number",
            regex: /^[\+]?[0-9\s\-\.\(\)]*$/
        }],
        softphone: [{
            name: "#name",
            regex: _t("device", "name_regex")
        }, {
            name: "#caller_id_name_internal",
            regex: _t("device", "caller_id_name_regex")
        }, {
            name: "#caller_id_number_internal",
            regex: /^[\+]?[0-9\s\-\.\(\)]*$/
        }, {
            name: "#caller_id_name_external",
            regex: _t("device", "caller_id_name_regex")
        }, {
            name: "#caller_id_number_external",
            regex: /^[\+]?[0-9\s\-\.\(\)]*$/
        }, {
            name: "#caller_id_number_emergency",
            regex: /^[\+]?[0-9\s\-\.\(\)]*$/
        }, {
            name: "#caller_id_name_emergency",
            regex: _t("device", "caller_id_name_regex")
        }, {
            name: "#sip_username",
            regex: /^[^\s]+$/
        }, {
            name: "#sip_expire_seconds",
            regex: /^[0-9]+$/
        }],
        mobile: [{
            name: "#name",
            regex: /^[a-zA-Z0-9\s_'\-]+$/
        }, {
            name: "#mdn",
            regex: /^[0-9]{10}$/
        }, {
            name: "#caller_id_name_internal",
            regex: /^[0-9A-Za-z ,]{0,15}$/
        }, {
            name: "#caller_id_number_internal",
            regex: /^[\+]?[0-9\s\-\.\(\)]*$/
        }, {
            name: "#caller_id_name_external",
            regex: /^[0-9A-Za-z ,]{0,15}$/
        }, {
            name: "#caller_id_number_external",
            regex: /^[\+]?[0-9\s\-\.\(\)]*$/
        }, {
            name: "#caller_id_number_emergency",
            regex: /^[\+]?[0-9\s\-\.\(\)]*$/
        }, {
            name: "#caller_id_name_emergency",
            regex: /^[0-9A-Za-z ,]{0,15}$/
        }, {
            name: "#sip_username",
            regex: /^[^\s]+$/
        }, {
            name: "#sip_expire_seconds",
            regex: /^[0-9]+$/
        }]
    },
    resources: {
        "device.list_classifier": {
            url: "{api_url}/accounts/{account_id}/phone_numbers/classifiers",
            contentType: "application/json",
            verb: "GET"
        },
        "device.list": {
            url: "{api_url}/accounts/{account_id}/devices",
            contentType: "application/json",
            verb: "GET"
        },
        "device.status": {
            url: "{api_url}/accounts/{account_id}/devices/status",
            contentType: "application/json",
            verb: "GET"
        },
        "device.status_no_loading": {
            url: "{api_url}/accounts/{account_id}/devices/status",
            contentType: "application/json",
            verb: "GET",
            trigger_events: !1
        },
        "device.get": {
            url: "{api_url}/accounts/{account_id}/devices/{device_id}",
            contentType: "application/json",
            verb: "GET"
        },
        "device.create": {
            url: "{api_url}/accounts/{account_id}/devices",
            contentType: "application/json",
            verb: "PUT"
        },
        "device.update": {
            url: "{api_url}/accounts/{account_id}/devices/{device_id}",
            contentType: "application/json",
            verb: "POST"
        },
        "device.filter": {
            url: "{api_url}/accounts/{account_id}/devices?filter_mac_address={mac_address}",
            contentType: "application/json",
            verb: "GET"
        },
        "device.delete": {
            url: "{api_url}/accounts/{account_id}/devices/{device_id}",
            contentType: "application/json",
            verb: "DELETE"
        },
        "user.list": {
            url: "{api_url}/accounts/{account_id}/users",
            contentType: "application/json",
            verb: "GET"
        },
        "account.get": {
            url: "{api_url}/accounts/{account_id}",
            contentType: "application/json",
            verb: "GET"
        }
    }
}, function(e) {
    var t = this;
    winkstart.registerResources(t.__whapp, t.config.resources), winkstart.publish("whappnav.subnav.add", {
        whapp: "voip",
        module: t.__module,
        label: _t("device", "devices_label"),
        icon: "device",
        weight: "20",
        category: _t("config", "advanced_menu_cat")
    })
}, {
    fix_arrays: function(e, t) {
        return typeof e.media == "object" && typeof t.media == "object" && ((e.media.audio || {}).codecs = (t.media.audio || {}).codecs, (e.media.video || {}).codecs = (t.media.video || {}).codecs), "media" in t && "encryption" in t.media && "methods" in t.media.encryption && (e.media.encryption = e.media.encryption || {}, e.media.encryption.methods = t.media.encryption.methods), e
    },
    save_device: function(e, t, n, r) {
        var i = this,
            s = typeof t.data == "object" && t.data.id ? t.data.id : undefined,
            o = i.fix_arrays(i.normalize_data($.extend(!0, {}, t.data, e)), e);
        s ? winkstart.request(!0, "device.update", {
            account_id: winkstart.apps.voip.account_id,
            api_url: winkstart.apps.voip.api_url,
            device_id: s,
            data: o
        }, function(e, t) {
            typeof n == "function" && n(e, t, "update")
        }, function(e, t) {
            typeof r == "function" && r(e, t, "update")
        }) : winkstart.request("device.list", {
            account_id: winkstart.apps.voip.account_id,
            api_url: winkstart.apps.voip.api_url
        }, function(e, t) {
            winkstart.request(!0, "device.create", {
                account_id: winkstart.apps.voip.account_id,
                api_url: winkstart.apps.voip.api_url,
                data: o
            }, function(e, t) {
                typeof n == "function" && n(e, t, "create")
            }, function(e, t) {
                typeof r == "function" && r(e, t, "create")
            })
        })
    },
    edit_device: function(e, t, n, r, i) {
        var s = this,
            o = t || $("#device-content"),
            u = n || $("#device-view", o),
            r = r || {},
            a = {
                save_success: r.save_success || function(e) {
                    s.render_list(o), s.edit_device({
                        id: e.data.id
                    }, o, u, a)
                },
                save_error: r.save_error || function(e, t, n) {
                    t == 200 && n == "mac_address" && winkstart.alert("warning", _t("device", "this_mac_address_is_already_in_use"))
                },
                delete_success: r.delete_success || function(e) {
                    u.empty(), s.render_list(o)
                },
                delete_error: r.delete_error,
                after_render: r.after_render
            },
            f = {
                data: $.extend(!0, {
                    enabled: !0,
                    caller_id: {
                        external: {},
                        internal: {},
                        emergency: {}
                    },
                    ringtones: {},
                    call_restriction: {
                        closed_groups: "inherit"
                    },
                    media: {
                        secure_rtp: "none",
                        peer_to_peer: "auto",
                        audio: {
                            codecs: ["PCMU", "PCMA"]
                        },
                        video: {
                            codecs: []
                        },
                        fax: {
                            option: "false"
                        },
                        fax_option: !1
                    },
                    sip: {
                        method: "password",
                        invite_format: "username",
                        username: "user_" + winkstart.random_string(6),
                        password: winkstart.random_string(12),
                        expire_seconds: "360"
                    },
                    contact_list: {
                        exclude: !1
                    },
                    call_forward: {},
                    music_on_hold: {}
                }, i || {}),
                field_data: {
                    users: [],
                    call_restriction: {},
                    sip: {
                        methods: {
                            password: _t("device", "password"),
                            ip: "IP"
                        },
                        invite_formats: {
                            username: "Username",
                            npan: "NPA NXX XXXX",
                            e164: "E. 164"
                        }
                    },
                    media: {
                        secure_rtp: {
                            value: "none",
                            options: {
                                none: _t("device", "none"),
                                srtp: _t("device", "srtp"),
                                zrtp: _t("device", "zrtp")
                            }
                        },
                        peer_to_peer_options: {
                            auto: _t("device", "automatic"),
                            "true": _t("device", "always"),
                            "false": _t("device", "never")
                        },
                        fax: {
                            options: {
                                auto: _t("device", "auto_detect"),
                                "true": _t("device", "always_force"),
                                "false": _t("device", "disabled")
                            }
                        },
                        audio: {
                            codecs: {
                                OPUS: "OPUS",
                                "CELT@32000h": "Siren @ 32Khz",
                                "G7221@32000h": "G722.1 @ 32khz",
                                "G7221@16000h": "G722.1 @ 16khz",
                                G722: "G722",
                                "speex@32000h": "Speex @ 32khz",
                                "speex@16000h": "Speex @ 16khz",
                                PCMU: "G711u / PCMU - 64kbps (North America)",
                                PCMA: "G711a / PCMA - 64kbps (Elsewhere)",
                                G729: "G729 - 8kbps (Requires License)",
                                GSM: "GSM",
                                "CELT@48000h": "Siren (HD) @ 48kHz",
                                "CELT@64000h": "Siren (HD) @ 64kHz"
                            }
                        },
                        video: {
                            codecs: {
                                VP8: "VP8",
                                H264: "H264",
                                H263: "H263",
                                H261: "H261"
                            }
                        }
                    },
                    hide_owner: e.hide_owner || !1,
                    outbound_flags: e.outbound_flags ? e.outbound_flags.join(", ") : e.outbound_flags
                },
                functions: {
                    inArray: function(e, t) {
                        return t ? $.inArray(e, t) == -1 ? !1 : !0 : !1
                    }
                }
            };
        winkstart.parallel({
            list_classifier: function(e) {
                winkstart.request("device.list_classifier", {
                    api_url: winkstart.apps.voip.api_url,
                    account_id: winkstart.apps.voip.account_id
                }, function(t) {
                    "data" in t && $.each(t.data, function(e, t) {
                        f.field_data.call_restriction[e] = {
                            friendly_name: t.friendly_name
                        }, f.data.call_restriction[e] = {
                            action: "inherit"
                        }
                    }), e(null, t)
                })
            },
            account: function(e) {
                winkstart.request(!0, "account.get", {
                    account_id: winkstart.apps.voip.account_id,
                    api_url: winkstart.apps.voip.api_url
                }, function(t, n) {
                    $.extend(f.field_data.sip, {
                        realm: t.data.realm
                    }), e(null, t)
                })
            },
            user_list: function(e) {
                winkstart.request(!0, "user.list", {
                    account_id: winkstart.apps.voip.account_id,
                    api_url: winkstart.apps.voip.api_url
                }, function(t, n) {
                    t.data.unshift({
                        id: "",
                        first_name: "- No",
                        last_name: "owner -"
                    }), f.field_data.users = t.data, e(null, t)
                })
            },
            media_list: function(e) {
                winkstart.request(!0, "media.list", {
                    account_id: winkstart.apps.voip.account_id,
                    api_url: winkstart.apps.voip.api_url
                }, function(t, n) {
                    t.data.unshift({
                        id: "",
                        name: _t("device", "default_music")
                    }, {
                        id: "silence_stream://300000",
                        name: _t("device", "silence")
                    }), f.field_data.music_on_hold = t.data, e(null, t)
                })
            },
            get_device: function(t) {
                typeof e == "object" && e.id ? winkstart.request(!0, "device.get", {
                    account_id: winkstart.apps.voip.account_id,
                    api_url: winkstart.apps.voip.api_url,
                    device_id: e.id
                }, function(e, n) {
                    f.data.device_type = "sip_device", "media" in e.data && "encryption" in e.data.media && (f.field_data.media.secure_rtp.value = e.data.media.encryption.enforce_security ? e.data.media.encryption.methods[0] : "none"), "sip" in e.data && "realm" in e.data.sip && (f.field_data.sip.realm = e.data.sip.realm), s.migrate_data(e), t(null, e)
                }) : t(null, f)
            },
            get_models: function(e) {
                winkstart.publish("phone.get_models", function(t) {
                    f.list_models = t, e(null, t)
                }) && e(null, {})
            }
        }, function(t, n) {
            var r = f;
            typeof e == "object" && e.id && (r = $.extend(!0, f, n.get_device)), n.get_device.data.media.audio.hasOwnProperty("codecs") && (r.data.media.audio.codecs = n.get_device.data.media.audio.codecs), n.get_device.data.media.video.hasOwnProperty("codecs") && (r.data.media.video.codecs = n.get_device.data.media.video.codecs), s.render_device(r, u, a), typeof a.after_render == "function" && a.after_render()
        })
    },
    delete_device: function(e, t, n) {
        var r = this;
        typeof e.data == "object" && e.data.id && winkstart.request(!0, "device.delete", {
            account_id: winkstart.apps.voip.account_id,
            api_url: winkstart.apps.voip.api_url,
            device_id: e.data.id
        }, function(e, n) {
            typeof t == "function" && t(e, n)
        }, function(e, t) {
            typeof n == "function" && n(e, t)
        })
    },
    render_device: function(e, t, n) {
        e._t = function(e) {
            return window.translate.device[e]
        };
        var r = this,
            i, s;
        "media" in e.data && "fax_option" in e.data.media && (e.data.media.fax_option = e.data.media.fax_option === "auto" || e.data.media.fax_option === !0), typeof e.data == "object" && e.data.device_type ? (i = r.templates[e.data.device_type].tmpl(e), $.inArray(e.data.device_type, ["fax", "softphone", "sip_device", "smartphone", "mobile"]) > -1 && (i.delegate('#sip_password[type="password"]', "focus", function() {
            var e = $(this).val();
            $('<input id="sip_password" name="sip.password" type="text"/>').insertBefore($(this)).val(e).focus(), $(this).remove()
        }), i.delegate('#sip_password[type="text"]', "blur", function(e) {
            var t;
            $(this).attr("removing") != "true" && ($(this).attr("removing", "true"), t = $(this).val(), $('<input id="sip_password" name="sip.password" type="password"/>').insertBefore($(this)).val(t), $(this).remove())
        })), winkstart.validate.set(r.config.validation[e.data.device_type], i), $("#owner_id", i).val() || $("#edit_link", i).hide(), $("#owner_id", i).change(function() {
            $("#owner_id option:selected", i).val() ? $("#edit_link", i).show() : $("#edit_link", i).hide()
        }), $(".inline_action", i).click(function(e) {
            var t = $(this).dataset("action") == "edit" ? {
                    id: $("#owner_id", i).val()
                } : {},
                n = t.id;
            e.preventDefault(), winkstart.publish("user.popup_edit", t, function(e) {
                n ? "id" in e.data ? $("#owner_id #" + e.data.id, i).text(e.data.first_name + " " + e.data.last_name) : ($("#owner_id #" + n, i).remove(), $("#edit_link", i).hide()) : ($("#owner_id", i).append('<option id="' + e.data.id + '" value="' + e.data.id + '">' + e.data.first_name + " " + e.data.last_name + "</option>"), $("#owner_id", i).val(e.data.id), $("#edit_link", i).show())
            })
        }), $(".device-save", i).click(function(t) {
            t.preventDefault(), winkstart.validate.is_valid(r.config.validation[e.data.device_type], i, function() {
                var t = form2object("device-form");
                r.clean_form_data(t), t.provision && t.provision.endpoint_brand && (t.provision.endpoint_model = $('.dropdown_family[data-brand="' + t.provision.endpoint_brand + '"]', i).val(), $("#" + t.provision.endpoint_model, i).size() > 0 && (t.provision.endpoint_family = $("#" + t.provision.endpoint_model, i).data("family"))), r.save_device(t, e, n.save_success, winkstart.error_message.process_error(n.save_error))
            }, function() {
                winkstart.alert(_t("device", "there_were_errors_on_the_form"))
            })
        }), $(".device-delete", i).click(function(t) {
            t.preventDefault(), winkstart.confirm(_t("device", "are_you_sure_you_want_to_delete"), function() {
                r.delete_device(e, n.delete_success, n.delete_error)
            })
        }), $("#music_on_hold_media_id", i).val() || $("#edit_link_media", i).hide(), e.data.sip && e.data.sip.method === "ip" ? $("#username_block", i).hide() : $("#ip_block", i).hide(), $("#sip_method", i).change(function() {
            $("#sip_method option:selected", i).val() === "ip" ? ($("#ip_block", i).slideDown(), $("#username_block", i).slideUp()) : ($("#username_block", i).slideDown(), $("#ip_block", i).slideUp())
        }), $("#music_on_hold_media_id", i).change(function() {
            $("#music_on_hold_media_id option:selected", i).val() ? $("#edit_link_media", i).show() : $("#edit_link_media", i).hide()
        }), $(".inline_action_media", i).click(function(e) {
            var t = $(this).dataset("action") == "edit" ? {
                    id: $("#music_on_hold_media_id", i).val()
                } : {},
                n = t.id;
            e.preventDefault(), winkstart.publish("media.popup_edit", t, function(e) {
                n ? "id" in e.data ? $("#music_on_hold_media_id #" + e.data.id, i).text(e.data.name) : ($("#music_on_hold_media_id #" + n, i).remove(), $("#edit_link_media", i).hide()) : ($("#music_on_hold_media_id", i).append('<option id="' + e.data.id + '" value="' + e.data.id + '">' + e.data.name + "</option>"), $("#music_on_hold_media_id", i).val(e.data.id), $("#edit_link_media", i).show())
            })
        })) : (i = r.templates.general_edit.tmpl({
            _t: function(e) {
                return window.translate.device[e]
            }
        }), $(".media_pane", i).hide(), $(".media_tabs .buttons", i).click(function() {
            $(".media_pane", i).show(), $(this).hasClass("current") || ($(".media_tabs .buttons").removeClass("current"), $(this).addClass("current"), e.data.device_type = $(this).attr("device_type"), r.format_data(e), r.render_device(e, $(".media_pane", i), n))
        })), $('*[rel=popover]:not([type="text"])', i).popover({
            trigger: "hover"
        }), $('*[rel=popover][type="text"]', i).popover({
            trigger: "focus"
        }), winkstart.tabs($(".view-buttons", i), $(".tabs", i)), s = function() {
            t.empty().append(i)
        }, typeof e.data == "object" && e.data.device_type == "sip_device" ? winkstart.publish("phone.render_fields", $(i), e.data.provision || (e.data.provision = {}), s, e.list_models || {}) && s() : (s(), $('.media_tabs .buttons[device_type="sip_device"]', i).trigger("click"))
    },
    format_data: function(e) {
        e.data.device_type === "smartphone" || e.data.device_type === "landline" || e.data.device_type === "cellphone" ? e.data.call_forward = {
            enabled: !0,
            require_keypress: !0,
            keep_caller_id: !0
        } : e.data.call_forward = {
            enabled: !1
        }, e.data.device_type === "sip_uri" && (e.data.sip.invite_format = "route"), e.data.device_type === "mobile" && ("mobile" in e.data || (e.data.mobile = {
            mdn: ""
        })), e.data.device_type === "fax" ? (e.data.media.fax_option = !0, e.data.media.fax.option = "true") : (e.data.media.fax_option = !1, e.data.media.fax.option = "false")
    },
    migrate_data: function(e) {
        var t = this;
        if (e.data.hasOwnProperty("media") && e.data.media.hasOwnProperty("audio") && e.data.media.audio.hasOwnProperty("codecs")) {
            var n = {
                    Speex: "speex@16000h",
                    G722_16: "G7221@16000h",
                    G722_32: "G7221@32000h",
                    CELT_48: "CELT@48000h",
                    CELT_64: "CELT@64000h"
                },
                r = [];
            _.each(e.data.media.audio.codecs, function(e) {
                n.hasOwnProperty(e) ? r.push(n[e]) : r.push(e)
            }), e.data.media.audio.codecs = r
        }
        return e.data.device_type == "cell_phone" && (e.data.device_type = "cellphone"), typeof e.data.media == "object" && typeof e.data.media.fax == "object" && "codecs" in e.data.media.fax && delete e.data.media.fax.codecs, "status" in e.data && (e.data.enabled = e.data.status, delete e.data.status), e.data.hasOwnProperty("ignore_complete_elsewhere") && (e.data.ignore_completed_elsewhere = e.data.ignore_complete_elsewhere, delete e.data.ignore_complete_elsewhere), e
    },
    normalize_data: function(e) {
        "provision" in e && e.provision.voicemail_beep !== 0 && delete e.provision.voicemail_beep, "media" in e && "fax" in e.media && "fax_option" in e.media && (e.media.fax.option = e.media.fax_option.toString()), "media" in e && "secure_rtp" in e.media && delete e.media.secure_rtp, "media" in e && "bypass_media" in e.media && delete e.media.bypass_media, e.caller_id.internal.number == "" && e.caller_id.internal.name == "" && delete e.caller_id.internal, e.caller_id.external.number == "" && e.caller_id.external.name == "" && delete e.caller_id.external, e.caller_id.emergency.number == "" && e.caller_id.emergency.name == "" && delete e.caller_id.emergency, e.music_on_hold.media_id || delete e.music_on_hold.media_id, e.owner_id || delete e.owner_id, $.isEmptyObject(e.call_forward) && delete e.call_forward, e.mac_address || delete e.mac_address, e.sip.method != "ip" && delete e.sip.ip;
        if (typeof e.outbound_flags == "string") {
            e.outbound_flags = e.outbound_flags.split(/,/);
            var t = [];
            $.each(e.outbound_flags, function(e, n) {
                n.replace(/\s/g, "") !== "" && t.push(n)
            }), e.outbound_flags = t
        }
        return e.device_type === "fax" && ("outbound_flags" in e ? e.outbound_flags.indexOf("fax") < 0 && e.outbound_flags.splice(0, 0, "fax") : e.outbound_flags = ["fax"]), e.ringtones && "internal" in e.ringtones && e.ringtones.internal === "" && delete e.ringtones.internal, e.ringtones && "external" in e.ringtones && e.ringtones.external === "" && delete e.ringtones.external, $.inArray(e.device_type, ["fax", "softphone", "sip_device", "smartphone"]) < 0 && delete e.call_restriction, e
    },
    clean_form_data: function(e) {
        "provision" in e && e.provision.voicemail_beep === !0 && (e.provision.voicemail_beep = 0), e.mac_address && (e.mac_address = e.mac_address.toLowerCase(), e.mac_address.match(/^(((\d|([a-f]|[A-F])){2}-){5}(\d|([a-f]|[A-F])){2})$/) ? e.mac_address = e.mac_address.replace(/-/g, ":") : e.mac_address.match(/^(((\d|([a-f]|[A-F])){2}){5}(\d|([a-f]|[A-F])){2})$/) && (e.mac_address = e.mac_address.replace(/(.{2})/g, "$1:").slice(0, -1))), e.caller_id && (e.caller_id.internal.number = e.caller_id.internal.number.replace(/\s|\(|\)|\-|\./g, ""), e.caller_id.external.number = e.caller_id.external.number.replace(/\s|\(|\)|\-|\./g, ""), e.caller_id.emergency.number = e.caller_id.emergency.number.replace(/\s|\(|\)|\-|\./g, "")), "media" in e && "audio" in e.media && (e.media.audio.codecs = $.map(e.media.audio.codecs, function(e) {
            return e ? e : null
        })), "media" in e && "video" in e.media && (e.media.video.codecs = $.map(e.media.video.codecs, function(e) {
            return e ? e : null
        }));
        if (e.device_type == "smartphone" || e.device_type == "landline" || e.device_type == "cellphone") e.call_forward.number = e.call_forward.number.replace(/\s|\(|\)|\-|\./g, ""), e.enabled = e.call_forward.enabled;
        return "extra" in e && e.extra.notify_unregister === !0 ? e.suppress_unregister_notifications = !1 : e.suppress_unregister_notifications = !0, "extra" in e && "closed_groups" in e.extra && (e.call_restriction.closed_groups = {
            action: e.extra.closed_groups ? "deny" : "inherit"
        }), $.inArray(e.device_type, ["sip_device", "mobile", "softphone"]) > -1 && "extra" in e && (e.media.encryption = e.media.encryption || {}, $.inArray(e.extra.encryptionMethod, ["srtp", "zrtp"]) > -1 ? (e.media.encryption.enforce_security = !0, e.media.encryption.methods = [e.extra.encryptionMethod]) : (e.media.encryption.methods = [], e.media.encryption.enforce_security = !1)), delete e.extra, e
    },
    render_list: function(e) {
        var t = this;
        winkstart.request(!0, "device.list", {
            account_id: winkstart.apps.voip.account_id,
            api_url: winkstart.apps.voip.api_url
        }, function(t, n) {
            var r = function(e) {
                var t = [];
                return e.length > 0 && $.each(e, function(e, n) {
                    t.push({
                        id: n.id,
                        title: n.name || _t("device", "no_name")
                    })
                }), t.sort(function(e, t) {
                    return e.title.toLowerCase() < t.title.toLowerCase() ? -1 : 1
                }), t
            };
            $("#device-listpanel", e).empty().listpanel({
                label: _t("device", "devices_label"),
                identifier: "device-listview",
                new_entity_label: _t("device", "add_device_label"),
                data: r(t.data),
                publisher: winkstart.publish,
                notifyMethod: "device.edit",
                notifyCreateMethod: "device.edit",
                notifyParent: e
            }), winkstart.request(!0, "device.status_no_loading", {
                account_id: winkstart.apps.voip.account_id,
                api_url: winkstart.apps.voip.api_url
            }, function(t, n) {
                $.each(t.data, function(t, n) {
                    $("#" + n.device_id, $("#device-listpanel", e)).addClass("registered")
                })
            }), $.each(t.data, function(t, n) {
                $.inArray(n.device_type, ["smartphone", "landline", "cellphone", "sip_uri"]) > -1 ? n.enabled === !1 ? $("#" + n.id, $("#device-listpanel", e)).addClass("disabled") : $("#" + n.id, $("#device-listpanel", e)).addClass("registered") : n.enabled === !1 && $("#" + n.id, $("#device-listpanel", e)).addClass("disabled")
            })
        })
    },
    activate: function(e) {
        var t = this,
            n = t.templates.device.tmpl();
        (e || $("#ws-content")).empty().append(n), t.render_list(n)
    },
    popup_edit_device: function(e, t, n) {
        var r, i;
        i = $('<div class="inline_popup"><div class="inline_content main_content"/></div>'), winkstart.publish("device.edit", e, i, $(".inline_content", i), {
            save_success: function(e) {
                r.dialog("close"), typeof t == "function" && t(e)
            },
            delete_success: function() {
                r.dialog("close"), typeof t == "function" && t({
                    data: {}
                })
            },
            after_render: function() {
                r = winkstart.dialog(i, {
                    title: e.id ? _t("device", "edit_device") : _t("device", "create_device")
                })
            }
        }, n)
    },
    define_stats: function() {
        var e = {
            active_calls: {
                icon: "device",
                get_stat: function(e) {
                    winkstart.request("device.status_no_loading", {
                        account_id: winkstart.apps.voip.account_id,
                        api_url: winkstart.apps.voip.api_url
                    }, function(t, n) {
                        var r = {
                            name: "active_calls",
                            number: t.data.length,
                            active: t.data.length > 0 ? !0 : !1,
                            color: t.data.length < 1 ? "red" : t.data.length > 1 ? "green" : "orange"
                        };
                        typeof e == "function" && e(r)
                    }, function(t, n) {
                        e({
                            error: !0
                        })
                    })
                },
                click_handler: function() {
                    winkstart.publish("device.activate")
                }
            }
        };
        return e
    },
    define_callflow_nodes: function(e) {
        var t = this;
        $.extend(e, {
            "device[id=*]": {
                name: _t("device", "device"),
                icon: "phone",
                category: _t("config", "advanced_cat"),
                module: "device",
                tip: _t("device", "device_tip"),
                data: {
                    id: "null"
                },
                rules: [{
                    type: "quantity",
                    maxSize: "1"
                }],
                isUsable: "true",
                caption: function(e, t) {
                    var n = e.getMetadata("id"),
                        r = "";
                    return n in t && (r = t[n].name), r
                },
                edit: function(e, n) {
                    var r = this;
                    winkstart.request(!0, "device.list", {
                        account_id: winkstart.apps.voip.account_id,
                        api_url: winkstart.apps.voip.api_url
                    }, function(r, i) {
                        var s, o;
                        o = t.templates.device_callflow.tmpl({
                            _t: function(e) {
                                return window.translate.device[e]
                            },
                            can_call_self: e.getMetadata("can_call_self") || !1,
                            parameter: {
                                name: "timeout (s)",
                                value: e.getMetadata("timeout") || "20"
                            },
                            objects: {
                                items: winkstart.sort(r.data),
                                selected: e.getMetadata("id") || ""
                            }
                        }), $("#device_selector option:selected", o).val() == undefined && $("#edit_link", o).hide(), $(".inline_action", o).click(function(t) {
                            var n = $(this).dataset("action") == "edit" ? {
                                id: $("#device_selector", o).val()
                            } : {};
                            t.preventDefault(), winkstart.publish("device.popup_edit", n, function(t) {
                                e.setMetadata("id", t.data.id || "null"), e.setMetadata("timeout", $("#parameter_input", o).val()), e.setMetadata("can_call_self", $("#device_can_call_self", o).is(":checked")), e.caption = t.data.name || "", s.dialog("close")
                            })
                        }), $("#add", o).click(function() {
                            e.setMetadata("id", $("#device_selector", o).val()), e.setMetadata("timeout", $("#parameter_input", o).val()), e.setMetadata("can_call_self", $("#device_can_call_self", o).is(":checked")), e.caption = $("#device_selector option:selected", o).text(), s.dialog("close")
                        }), s = winkstart.dialog(o, {
                            title: _t("device", "device_title"),
                            minHeight: "0",
                            beforeClose: function() {
                                typeof n == "function" && n()
                            }
                        })
                    })
                }
            }
        })
    }
});
