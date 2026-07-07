// Botemia Bridge for Mortgage Assist Demo
// Generated: 7/3/2026, 1:20:40 PM
// Client ID: mortgage-assist-demo
// Version: 5.8 - LISTENER MODE (FINAL)

(function() {
    "use strict";

    // ===== GLOBAL VARIABLES =====
    let isPreQualificationActive = false;
    window.preQualController = null;
    let dailyCallObject = null;

    // ===== EMBEDDED CLIENT CONFIGURATION =====
    window.BotemiaConfig = {
        "id": "mortgage-assist-demo",
        "name": "Mortgage Assist Demo",
        "websiteUrl": "https://client-tester.netlify.app/mortgage-assist/?clientId=mortgage-assist-demo",
        "agentId": "agent_7b0776ef6b855de5",
        "modules": {
            "preQualification": {
                "triggerPhrase": "So let's start with your full name please",
                "triggerPhraseLegacy": "let's get started"
            },
            "emailConfig": {"loanOfficerEmail":"bizboost.expert@gmail.com","ccEmail":"","emailSubject":"New Pre-Qual Lead: {{firstName}} {{lastName}}","clientEmail":"mobilewise.ai@gmail.com","supportPhone":"949-228-5263","emailTriggers":["Your confirmation has been sent"],"phoneTriggers":["Let me get a loan expert on the phone"]},
            "splashScreen": {"enabled":true,"agentId":"agent_7b0776ef6b855de5","title":"Tess","subtitle":"Your Friendly AI Web Assistant","serviceLine":"Offering 24/7 Customer Service!","presentsText":"Presents:","tessVideoUrl":"https://fcgbusobfdwnpoqyuzoe.supabase.co/storage/v1/object/sign/processed-videos/tess-button.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjJjNGVkZS0wYzRiLTQyMzAtOGE5MC1jMDhmNjhlNDVkNTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9jZXNzZWQtdmlkZW9zL3Rlc3MtYnV0dG9uLm1wNCIsImlhdCI6MTc3MzgwNDA4MSwiZXhwIjoxODA1MzQwMDgxfQ.07K0XCnTt3zAZPp2ZAgZ-SzYhZj6nW1Vun8WW-zDAVQ","tessVideoFit":"cover","tickerKeywords":"Get Pre-Qualified, Any Lending Questions, Refinance Qualification","gradientCenter":"#1e4a8a","gradientOuter":"#0a1a2f","primaryButton":{"text":"Get AI help with Tess","gradientTop":"#f8c400","gradientBottom":"#d4a000","hoverTop":"#ffd700","hoverBottom":"#e0b000","textColor":"#0a0f1e"},"secondaryButton":{"text":"Just Browsing","gradientTop":"#3a4050","gradientBottom":"#2a2f3f","hoverTop":"#4a5060","hoverBottom":"#3a4050","textColor":"#ffffff"},"persistentButton":{"enabled":true,"position":"middle-right","action":"activate-tess","gradientTop":"#f8c400","gradientBottom":"#d4a000"},"branding":{"name":"","logo":"https://fcgbusobfdwnpoqyuzoe.supabase.co/storage/v1/object/sign/Logos/clients/demo-logo.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjJjNGVkZS0wYzRiLTQyMzAtOGE5MC1jMDhmNjhlNDVkNTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMb2dvcy9jbGllbnRzL2RlbW8tbG9nby5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgzMzgzMTY2LCJleHAiOjE4MTQ5MTkxNjZ9._91eAUwxKj3hT5nGr1kWjJpCtRGM1aqyxEB4w0h8nw0"}},
            "smartScreen": {"action":"showBestMatch","images":[{"url":"https://fcgbusobfdwnpoqyuzoe.supabase.co/storage/v1/object/public/clients/mortgage-assist-demo/smart-screens/pre-qualification-lead.jpg","link":"","name":"pre-qualification-lead","caption":"","imageSize":"400px","showTitle":true,"triggerMatch":["Check your inbox now"],"backdropOpacity":"0.5","backgroundColor":"white","displayDuration":4}]},
            "testimonial": {"groups":[{"name":"Overall Satisfaction","triggerPhrase":"let me share a valued client review with you","category":"results","videos":["https://fcgbusobfdwnpoqyuzoe.supabase.co/storage/v1/object/sign/Video%20Testimonials/mobile-wise-ai/Mortgage-Assist.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjJjNGVkZS0wYzRiLTQyMzAtOGE5MC1jMDhmNjhlNDVkNTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlbyBUZXN0aW1vbmlhbHMvbW9iaWxlLXdpc2UtYWkvTW9ydGdhZ2UtQXNzaXN0Lm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODMwOTc3MzAsImV4cCI6MTgxNDYzMzczMH0.69j0XyaJDmX0okjFUUajiupjXb5bJ879cR-6iM8tzvQ"]}]},
            "videoVault": {"videos":[]},
            "mortgageCalc": {"enabled":true,"triggerPhrase":"let me bring up the home loan pre qualification calculator","defaultRate":7.25,"defaultTerm":30},
            "websiteInfo": {"triggers":["Here are the latest rates"],"links":[{"title":"Latest Rates","url":"https://client-tester.netlify.app/mortgage-assist/mortgage-rates-screen","triggerPhrase":"Here are the latest rates"}]}
        }
    };

    // ===== TRIGGER PHRASE (from dashboard) =====
    window.TRIGGER_PHRASE = window.BotemiaConfig.modules?.preQualification?.triggerPhrase;
    if (!window.TRIGGER_PHRASE) {
        console.error("❌ CRITICAL: No trigger phrase configured in dashboard!");
    } else {
        console.log("🎯 Bridge using trigger phrase:", window.TRIGGER_PHRASE);
    }

    // =========================================
    // 🍋 AUTO-LOADER: EMAILJS LIBRARY
    // =========================================
    (function() {
        var js = document.createElement("script");
        js.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
        js.onload = function() {
            if (window.emailjs) {
                window.emailjs.init('7-9oxa3UC3uKxtqGM');
                console.log("✅ EmailJS Ready");
            }
        };
        document.head.appendChild(js);
    })();

    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600;1,700&family=Dancing+Script:wght@600;700&display=swap';
    document.head.appendChild(fontLink);

    const style = document.createElement('style');
    style.textContent = `
        .splash-overlay { display: block !important; background: transparent !important; backdrop-filter: none !important; padding: 0 !important; }
        .splash-page { display: flex; flex-direction: column; width: 100%; height: 100%; overflow-y: auto; background: #fff; }
        .splash-logo-bar { background: #fff; padding: 8px 20px 4px; text-align: center; min-height: 65px; }
        .splash-logo-bar img { max-width: 78%; max-height: 90px; height: auto; display: inline-block; }
        .splash-presents { background: #fff; text-align: center; padding: 2px 0 8px; font-family: 'Playfair Display', serif; font-style: italic; font-weight: 600; font-size: 1.25rem; color: #1e4a8a; }
        .splash-navy { flex: 1; background: radial-gradient(circle at center, var(--grad-center, #1e4a8a) 0%, var(--grad-outer, #0a1a2f) 80%); padding: 11px 24px 0; display: flex; flex-direction: column; align-items: center; position: relative; }
        .splash-navy h1 { font-family: 'Playfair Display', serif; font-style: italic; font-weight: 700; font-size: 2.9rem; color: #fff; display: flex; align-items: center; justify-content: center; gap: 10px; letter-spacing: 0.01em; margin: 0 0 0 -20px; }
        .splash-navy h1 .sparkle { font-size: 1.95rem; filter: drop-shadow(0 0 6px rgba(248,196,0,0.7)); }
        .splash-navy h2 { font-family: 'Dancing Script', cursive; color: rgba(255,255,255,0.92); font-size: 1.55rem; font-weight: 600; margin: 2px 0 22px; text-align: center; }
        .splash-avatar-container {
            width: 175px; height: 175px; margin: 0 auto 20px;
            border-radius: 50%; overflow: hidden;
            background: #000;
            border: 3px solid rgba(248,196,0,0.85);
            box-shadow: 0 0 0 6px rgba(248,196,0,0.12), 0 20px 40px rgba(0,0,0,0.5);
            display: flex; align-items: center; justify-content: center;
            position: relative;
        }
        .splash-avatar-container lemon-slice-widget {
            position: absolute;
            top: 80%; left: 46%;
            transform: translate(-50%, -50%);
            width: 220px !important;
            height: 329px !important;
            max-width: none !important;
            max-height: none !important;
        }
        .splash-service-line { color: #fff; font-weight: 400; font-size: 1.15rem; text-align: center; margin: 6px 0 18px; }
        .button-group { display: flex; gap: 10px; justify-content: center; padding: 20px 20px 26px; }
        .primary-btn, .secondary-btn { padding: 14px 20px; border-radius: 40px; font-size: 1rem; font-weight: 600; cursor: pointer; flex: 1; max-width: 200px; border: none; transition: all 0.2s; }
        .primary-btn:hover, .secondary-btn:hover { transform: scale(1.02); }
        .ticker-container {
            position: relative; width: calc(100% + 48px); margin: 0 -24px;
            background: linear-gradient(90deg, rgba(0,0,0,0.9), rgba(248,196,0,0.2), rgba(0,0,0,0.9));
            color: #f8c400; padding: 8px 0;
            overflow: hidden; white-space: nowrap; font-size: 13px; font-weight: 600;
            text-shadow: 0 1px 2px rgba(0,0,0,0.8);
            border-top: 2px solid #f8c400; box-shadow: 0 -2px 10px rgba(0,0,0,0.5);
        }
        .ticker-content { display: inline-block; animation: ticker 25s linear infinite; padding-left: 100%; }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        .ticker-item { display: inline-block; padding: 0 25px; color: white; font-size: 13px; font-weight: 500; letter-spacing: 0.5px; }
        .ticker-item i { margin-right: 8px; color: #f8c400; font-size: 12px; filter: drop-shadow(0 0 3px rgba(248,196,0,0.5)); }
        #main-widget-outer {
            position: fixed !important;
            bottom: 20px; right: 20px;
            width: 150px; height: 150px;
            z-index: 999998;
        }
         #main-widget-circle-wrap lemon-slice-widget {
            position: absolute !important;
            /* Changed from 0px to 5px to drop her down */
            top: 5px !important;
            left: -15px !important;
            transform: translateX(5px) !important;
            width: 200px !important;
            height: 300px !important;
            max-width: none !important;
            max-height: none !important;
            zoom: 0.95;
        }

        /* TESS LOADER OVERLAY */
        #tess-loader-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            border-radius: 50%;
            background: #000;
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            z-index: 999999;
            pointer-events: none;
            transition: opacity 0.5s ease;
        }
        #tess-loader-overlay.hidden { opacity: 0; pointer-events: none; }
        
        .tess-loader-ring {
            width: 40px; height: 40px;
            border: 3px solid rgba(248, 196, 0, 0.2);
            border-top: 3px solid #f8c400;
            border-radius: 50%;
            animation: tess-spin 1s linear infinite;
            margin-bottom: 8px;
        }
        .tess-loader-text {
            color: rgba(255,255,255,0.8); font-size: 10px; font-weight: 600; letter-spacing: 0.5px;
        }
        @keyframes tess-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        @media (max-width: 480px) {
            #main-widget-outer { width: 120px; height: 120px; bottom: 16px; right: 16px; }
            #main-widget-circle-wrap lemon-slice-widget { 
                width: 160px !important; 
                height: 240px !important; 
                /* Dropped her down 5px on mobile too */
                top: 20px !important; 
                left: -15px !important; 
                transform: translateX(5px) !important;
                zoom: 0.90;
            }
        }
    `;
    document.head.appendChild(style);

    function createSplashWidget() {
        const widget = document.createElement('lemon-slice-widget');
        let clientId = window.BotemiaConfig?.id;
        if (!clientId) { console.error("❌ CRITICAL: BotemiaConfig ID missing!"); return null; }
        widget.setAttribute('client-id', clientId);
        widget.clientId = clientId;
        const sessionId = 'session-' + crypto.randomUUID();
        window.tessSessionId = sessionId;
        widget.setAttribute('room-id', sessionId);
        widget.roomId = sessionId;
        widget.setAttribute('agent-id', 'agent_7b0776ef6b855de5');
        widget.agentId = 'agent_7b0776ef6b855de5';
        const apiKey = "sk_lemon_Tleyq2zh6NoMpllEHf7mYNRxzIED6YcP";
        widget.setAttribute('api-key', apiKey);
        widget.apiKey = apiKey;
        widget.setAttribute('muted', 'true');
        widget.muted = true;
        widget.setAttribute('suppress-audio', 'true');
        widget.setAttribute('initial-state', 'active');
        widget.setAttribute('inline', '');
        widget.setAttribute('custom-minimized-width', '280');
        widget.setAttribute('custom-minimized-height', '400');
        widget.setAttribute('hide-ui', '');
        widget.setAttribute('suppress-initial-message', 'true');
        widget.id = 'splash-widget';
        return widget;
    }

        // --- INJECT TESS LOADER INTO CIRCLE ---
    var circleWrap = document.getElementById("main-widget-circle-wrap");
    if (circleWrap) {
        var loaderHTML = '<div id="tess-loader-overlay"><div class="tess-loader-ring"></div><div class="tess-loader-text">CONNECTING...</div></div>';
        circleWrap.insertAdjacentHTML('afterbegin', loaderHTML);

        // Checker to hide loader once Tess is actually playing
        var tessLoaderInterval = setInterval(function() {
            var widget = circleWrap.querySelector('lemon-slice-widget');
            if (widget && widget.shadowRoot) {
                var video = widget.shadowRoot.querySelector('video');
                var canvas = widget.shadowRoot.querySelector('canvas');
                
                if ((video && video.readyState >= 2) || canvas) {
                    clearInterval(tessLoaderInterval);
                    var loader = document.getElementById("tess-loader-overlay");
                    if (loader) {
                        loader.classList.add("hidden");
                        setTimeout(function() { loader.remove(); }, 600);
                    }
                    console.log("✅ Tess video detected — Loader hidden.");
                }
            }
        }, 250); 

        // Failsafe: Force remove loader after 8 seconds
        setTimeout(function() {
            clearInterval(tessLoaderInterval);
            var loader = document.getElementById("tess-loader-overlay");
            if (loader) {
                loader.classList.add("hidden");
                setTimeout(function() { loader.remove(); }, 600);
            }
        }, 8000);
    }

    // ===== INTERVIEW LISTENER (QUESTIONS FROM LEMONSLICE) =====
    window.interviewListener = {
        isActive: false,
        answers: {},
        currentField: null,
        
        start: function() {
            this.isActive = true;
            this.answers = {};
            console.log("🎧 Interview listener activated");
        },
        
        // Called when Tess speaks - detects which question is being asked
        detectQuestion: function(tessText) {
            const patterns = {
                "loanType": ["type of loan", "FHA", "VA", "Conventional"],
                "monthlyIncome": ["monthly income", "gross monthly"],
                "downPayment": ["putting down", "down payment"],
                "creditScore": ["credit score"],
                "fullName": ["full name"],
                "email": ["email address"],
                "phone": ["phone number"],
                "scheduledDateTime": ["date and time", "Zoom meeting"],
                "specialRequests": ["special requests"]
            };
            
            for (const [field, keywords] of Object.entries(patterns)) {
                if (keywords.some(kw => tessText.toLowerCase().includes(kw))) {
                    this.currentField = field;
                    console.log("📋 Expecting answer for:", field);
                    return field;
                }
            }
            return null;
        },
        
        // Called when user speaks - stores the answer
        captureAnswer: function(userText) {
            if (this.currentField && this.isActive) {
                this.answers[this.currentField] = userText;
                console.log("💾 Stored " + this.currentField + ":", userText);
                this.currentField = null;
                return true;
            }
            return false;
        },
        
        // Called when interview completes
        finish: function() {
            this.isActive = false;
            console.log("✅ Interview complete. Answers:", this.answers);
            return this.answers;
        }
    };


    // ===== CALCULATOR SUMMARY — reads directly from DOM for Tess read-back =====
    window.getCalcSummary = function() {
        var homePrice  = document.getElementById("mc-home-price")?.textContent || "not calculated";
        var monthly    = document.getElementById("mc-monthly")?.textContent    || "not calculated";
        var loanAmt    = document.getElementById("mc-loan")?.textContent       || "not calculated";
        var dti        = document.getElementById("mc-dti")?.textContent        || "not calculated";
        var verdict    = document.getElementById("mc-verdict")?.textContent    || "";
        var income     = document.getElementById("mc-income")?.value           || "";
        var downPct    = document.getElementById("mc-down-pct")?.value         || "";
        var debt       = document.getElementById("mc-debt")?.value             || "";
        var loanTypeSel = document.getElementById("mc-loan-type");
        var loanType   = loanTypeSel ? loanTypeSel.options[loanTypeSel.selectedIndex]?.text : "Conventional";
        var creditSel  = document.getElementById("mc-credit");
        var credit     = creditSel ? creditSel.options[creditSel.selectedIndex]?.text : "";

        return {
            homePrice, monthly, loanAmt, dti, verdict,
            income, downPct, debt, loanType, credit,
            summary: "Based on what you've shared — an income of $" + parseInt(income||0).toLocaleString() +
                     ", " + (downPct||"0") + "% down, and " + loanType + " financing — " +
                     "you may qualify for a home in the range of " + homePrice +
                     " with an estimated monthly payment of " + monthly + ". " +
                     "Your debt-to-income ratio is " + dti + ". " + verdict
        };
    };

    // Make summary available to Tess via mainWidget
    window.sendCalcSummaryToTess = function() {
        var s = window.getCalcSummary();
        console.log("📊 Calc summary for Tess:", s.summary);
        if (window.mainWidget && typeof window.mainWidget.sendMessage === "function") {
            window.mainWidget.sendMessage("Calculator results: home price range " + s.homePrice +
                ", monthly payment " + s.monthly + ", DTI " + s.dti + ". " + s.verdict);
        }
        return s;
    };

    class PreQualificationController {
        constructor() {
            this.isActive = false;
            this.script = null;
            this.answers = {};
            this.currentStepIndex = 0;
            this.currentField = null;
            this.pendingValue = null;
            this.interviewCompleted = false;
        }

        startInterview() {
            if (this.isActive) return;
            
            this.isActive = true;
            this.currentStepIndex = 0;
            this.answers = {};
            
            // 🔥 NUCLEAR OPTION: Completely mute LemonSlice AI
            if (window.mainWidget) {
                window.mainWidget.setAttribute('muted', 'true');
                window.mainWidget.setAttribute('suppress-audio', 'true');
                window.mainWidget.setAttribute('suppress-ai', 'true');
                console.log("🔇 LemonSlice AI forcefully muted");
            }
            
            console.log("🎧 Listener Mode Activated - Waiting for LemonSlice questions");
        }

        handleUserInput(userText) {
            // Allow capture during calculator mode even if pre-qual not yet active
            if (!this.isActive && !window._calcModeActive) return;
            
            // Clean credit score values — strip $ and , if current field is creditScore
            if (this.currentField === "creditScore") {
                userText = userText.replace(/[$,]/g, "").trim();
            }
            
            const lowerText = userText.toLowerCase();
            
            // Detect which field we're capturing based on Tess's last question
            if (this.currentField) {
                // During calc mode: if user provides value directly (before Tess repeats),
                // store as pendingValue so it's ready for confirmation
                if (window._calcModeActive && !this.pendingValue) {
                    var cleanLowerCheck = lowerText.replace(/[.!?,]/g, "").trim();
                    var isConfirmation = (cleanLowerCheck === "yes" || cleanLowerCheck === "correct" || cleanLowerCheck === "that's correct");
                    if (!isConfirmation) {
                        this.pendingValue = userText;
                        console.log("🏠 User direct value:", this.currentField, "=", userText);
                        return; // wait for Tess to repeat and user to confirm
                    }
                }
                // Normalize email addresses before storing
                if (this.currentField === "email" && userText) {
                    userText = userText
                        .replace(/\s+at\s+/g, "@")
                        .replace(/\s+dot\s+/g, ".")
                        .replace(/\s+/g, "")
                        .replace(/\.+$/g, "");
                }
                
                // Normalize phone numbers
                if (this.currentField === "phone" && userText) {
                    userText = userText.replace(/[^0-9\-()+]/g, "").trim();
                }
                
                // Check if this is a confirmation ("yes" to "Is that correct?")
                var cleanLower = lowerText.replace(/[.!?,]/g, "").trim();
                if (cleanLower === "yes" || cleanLower === "yes it is" || cleanLower === "correct" || cleanLower === "that's correct") {
                    if (this.pendingValue) {
                        this.answers[this.currentField] = this.pendingValue;
                        console.log("✅ Confirmed:", this.currentField, "=", this.pendingValue);
                        // 🏠 If calculator is open, auto-populate the matching field
                        var calcFields = ["annualIncome","monthlyIncome","downPayment","creditScore","loanTerm","loanType","monthlyDebt"];
                        if (calcFields.indexOf(this.currentField) !== -1 && typeof window.populateCalcField === "function") {
                            var populated = window.populateCalcField(this.currentField, this.pendingValue);
                            if (populated) console.log("🏠 Calculator field populated:", this.currentField);
                        }
                    }
                    this.pendingValue = null;
                    this.currentField = null;
                } else if (cleanLower === "no" || cleanLower.includes("redo") || cleanLower.includes("repeat") || cleanLower === "that's not correct") {
                    console.log("🔄 User wants to redo:", this.currentField);
                    this.pendingValue = null;
                    // Keep currentField so we capture the next attempt
                } else {
                    // This is the actual value being provided
                    this.pendingValue = userText;
                    console.log("📝 Pending:", this.currentField, "=", userText);
                }
            } else {
                // Store uncategorized responses
                console.log("💾 Captured (uncategorized):", userText);
            }
            
            // Store all responses in chronological order as backup
            if (!this.answers.allResponses) this.answers.allResponses = [];
            this.answers.allResponses.push({ 
                text: userText, 
                field: this.currentField || "unknown",
                timestamp: Date.now() 
            });
            
            // Check if we've collected all critical fields
            if (this.answers.fullName && this.answers.email && this.answers.phone && !this.interviewCompleted) {
                this.interviewCompleted = true;
                console.log("🎉 All critical fields collected!");
                // Give LemonSlice time to finish speaking before finishing
                setTimeout(() => {
                    this.finishInterview();
                }, 5000);
            }
        }

        detectFieldFromQuestion(tessText) {
            const lowerText = tessText.toLowerCase();

            // 🏠 CALCULATOR MODE: activate when Tess asks calculator questions
            var calcQuestions = ["annual income", "down payment", "credit score", "loan term", "interest rate", "specific rate", "lowest rate"];
            var isCalcQuestion = calcQuestions.some(function(q) { return lowerText.indexOf(q) !== -1; });
            if (isCalcQuestion && !this.isActive) {
                window._calcModeActive = true;
                console.log("🏠 Calculator capture mode activated");
            }

            // 🏠 AUTO-CLOSE calculator when Tess moves to contact collection
            if ((lowerText.includes("full name") || lowerText.includes("two quick things")) && window._calcModeActive) {
                window._calcModeActive = false;
                var bd = document.getElementById("mortgage-calc-backdrop");
                if (bd) { bd.remove(); console.log("🏠 Calculator auto-closed — moving to contact collection"); }
                else { var ov = document.getElementById("mortgage-calc-overlay"); if(ov) ov.remove(); }
            }
            
                        // Capture "I heard X" patterns from Tess (no longer requires "Is that correct" — KB wording varies)
                        var heardMatch = tessText.match(/I heard\s+["']?(.+?)["']?[.?!]/i);
                        if (heardMatch && heardMatch[1]) {
                            var heardValue = heardMatch[1].trim();
                            if (heardValue.indexOf("@") !== -1 || heardValue.indexOf(" at ") !== -1 || heardValue.indexOf("gmail") !== -1 || heardValue.indexOf("dot com") !== -1) {
                                window._tessHeardEmail = heardValue;
                                console.log("📧 Captured email from Tess:", heardValue);
                            } else if (heardValue.length > 1 && !heardValue.match(/^\d/)) {
                                window._tessHeardName = heardValue;
                                console.log("👤 Captured name from Tess:", heardValue);
                            }
                        }
            if (lowerText.includes("full name") || lowerText.includes("start with your")) {
                this.currentField = "fullName";
            } else if (lowerText.includes("business name") || lowerText.includes("website")) {
                this.currentField = "businessName";
            } else if (lowerText.includes("email")) {
                this.currentField = "email";
            } else if (lowerText.includes("phone")) {
                this.currentField = "phone";
            } else if (lowerText.includes("date and time") || lowerText.includes("zoom meeting")) {
                this.currentField = "scheduledDateTime";
            } else if (lowerText.includes("type of loan") || lowerText.includes("fha")) {
                this.currentField = "loanType";
            } else if (lowerText.includes("monthly income") || lowerText.includes("gross monthly")) {
                this.currentField = "monthlyIncome"; window._lastCalcField = "monthlyIncome";
            } else if (lowerText.includes("annual income") || lowerText.includes("annual salary") || lowerText.includes("earn per year") || lowerText.includes("make per year")) {
                this.currentField = "annualIncome"; window._lastCalcField = "annualIncome";
            } else if (lowerText.includes("monthly debt") || lowerText.includes("debt payment") || lowerText.includes("car payment") || lowerText.includes("monthly obligation") || lowerText.includes("other loans")) {
                this.currentField = "monthlyDebt"; window._lastCalcField = "monthlyDebt";
            } else if (lowerText.includes("putting down") || lowerText.includes("down payment") || lowerText.includes("how much down")) {
                this.currentField = "downPayment"; window._lastCalcField = "downPayment";
            } else if (lowerText.includes("credit score")) {
                this.currentField = "creditScore"; window._lastCalcField = "creditScore";
            } else if (lowerText.includes("loan term") || lowerText.includes("how many years") || lowerText.includes("15 or 30") || lowerText.includes("prefer a 15") || lowerText.includes("prefer a 30")) {
                this.currentField = "loanTerm"; window._lastCalcField = "loanTerm";
            } else if (lowerText.includes("type of loan") || lowerText.includes("loan type") || lowerText.includes("va loan") || lowerText.includes("fha") || lowerText.includes("conventional") || lowerText.includes("jumbo")) {
                this.currentField = "loanType"; window._lastCalcField = "loanType";
            } else if (lowerText.includes("special requests")) {
                this.currentField = "specialRequests";
            } else if (lowerText.includes("anything else")) {
                this.expectingClosingResponse = true;
                console.log("🎯 Expecting closing response (Yes/No)");
            }
            
            if (this.currentField) {
                // Don't re-detect a field we just populated
                if (this.currentField === window._lastPopulatedField) {
                    console.log("🚫 Skipping already-populated field:", this.currentField);
                    this.currentField = null;
                    window._lastCalcField = null;
                } else {
                    console.log("🎯 Expecting answer for:", this.currentField);
                    // Check if there's a pending heard value waiting to populate
                    if (window._pendingHeardValue && window._calcModeActive && typeof window.populateCalcField === "function") {
                        console.log("🏠 Applying pending heard value:", this.currentField, "=", window._pendingHeardValue);
                        var applied = window.populateCalcField(this.currentField, window._pendingHeardValue);
                        if (applied) {
                            console.log("✅ Pending value applied successfully");
                            if (this.answers) this.answers[this.currentField] = window._pendingHeardValue;
                            window._lastPopulatedField = this.currentField;
                            this.currentField = null;
                            this.pendingValue = null;
                            window._lastCalcField = null;
                        }
                        window._pendingHeardValue = null;
                    }
                }
            }
        }

        finishInterview() {
            this.isActive = false;
            console.log("✅ Interview Complete.");
            
            // 🔥 RESTORE LEMONSLICE AI
            if (window.mainWidget) {
                window.mainWidget.removeAttribute('muted');
                window.mainWidget.removeAttribute('suppress-audio');
                window.mainWidget.removeAttribute('suppress-ai');
                window.mainWidget.setAttribute('controlled-widget-state', 'inactive');
                console.log("🔊 LemonSlice AI restored");
            }
            
            this.speak("That is everything! I am generating your pre-qualification letter now.");
        trackEvent('prequal_complete');
            this.sendEmail();
        }

        speak(text) {
            if (!text) return;
            console.log("🤖 Tess says: " + text);
            
            // 🔥 FORCE DISABLE LEMONSLICE AI DURING INTERVIEW
            if (this.isActive && window.mainWidget) {
                window.mainWidget.setAttribute('suppress-ai', 'true');
                window.mainWidget.setAttribute('controlled-widget-state', 'active');
            }
            
            if (window.mainWidget && typeof window.mainWidget.sendMessage === "function") {
                try {
                    window.mainWidget.sendMessage(text);
                    console.log("📤 sendMessage called successfully");
                } catch(e) {
                    console.error("❌ sendMessage error:", e);
                }
            } else {
                console.error("❌ mainWidget not ready - activate Tess first!");
            }
        }

        sendEmail() {
            console.log("📧 Sending emails...");
            const data = this.answers;
            
            // Capture name from Tess if not already set
            if ((!data.fullName || data.fullName === "Not provided") && window._tessHeardName) {
                data.fullName = window._tessHeardName;
            }
            
            // Normalize email if it came from Tess's speech
            if (data.email && data.email.indexOf("@") === -1) {
                data.email = data.email
                    .replace(/\s+at\s+/g, "@")
                    .replace(/\s+dot\s+/g, ".")
                    .replace(/\s+/g, "")
                    .replace(/\.+$/g, "");
            }
            
            // First try to grab email that Tess heard and confirmed
            if (!data.email || data.email === "Not provided" || data.email.indexOf("@") === -1) {
                if (window._tessHeardEmail && window._tessHeardEmail.indexOf("@") !== -1) {
                    data.email = window._tessHeardEmail;
                } else if (window._tessHeardEmail) {
                    data.email = window._tessHeardEmail
                        .replace(/\s+at\s+/g, "@")
                        .replace(/\s+dot\s+/g, ".")
                        .replace(/\s+/g, "")
                        .replace(/\.+$/g, "");
                } else {
                    var cfgEmail = window.BotemiaConfig?.modules?.emailConfig?.clientEmail;
                    if (cfgEmail) data.email = cfgEmail;
                }
            }
            // ===== EMAIL 1: TO LOAN BROKER PROSPECT =====
            if (data.email) {
                var prospectParams = {
                    to_email: data.email,
                    full_name: data.fullName || "Valued Client",
                    email: data.email,
                    phone: data.phone || "Not provided",
                    business_name: data.businessName || "Not provided",
                    scheduled_datetime: data.scheduledDateTime || "To be determined",
                    loan_type: "See Full Example Below",
                    annual_income: "See Full Example Below",
                    down_payment: "See Full Example Below",
                    credit_score: "See Full Example Below",
                    special_requests: data.specialRequests || "None",
                    submitted_at: new Date().toLocaleString()
                };
                
                emailjs.send("service_b9bppgb", "template_8kx812d", prospectParams)
                    .then(function() { console.log("✅ Prospect email sent to: " + data.email); })
                    .catch(function(e) { console.error("❌ Prospect email error:", e); });
            } else {
                console.warn("⚠️ No prospect email provided, skipping prospect email");
            }
            
            // ===== EMAIL 2: TO YOU/AGENCY =====
            var clientEmail = window.BotemiaConfig?.modules?.emailConfig?.loanOfficerEmail || window.BotemiaConfig?.modules?.emailConfig?.clientEmail || "mobilewise.ai@gmail.com";
            
            var clientParams = {
                to_email: clientEmail,
                full_name: data.fullName || "Not provided",
                email: data.email || "Not provided",
                phone: data.phone || "Not provided",
                scheduled_datetime: data.scheduledDateTime || "Not provided",
                message: data.specialRequests || "None",
                submitted_at: new Date().toLocaleString()
            };
            
            emailjs.send("service_b9bppgb", "template_uix9cyx", clientParams)
                .then(function() { console.log("✅ Agency notification sent to: " + clientEmail); })
                .catch(function(e) { console.error("❌ Agency email error:", e); });
        }
    }
    window.PreQualificationController = PreQualificationController;

    // 🏠 MORTGAGE CALCULATOR MODULE
    window.showMortgageCalculator = function() {
        var existing = document.getElementById("mortgage-calc-backdrop");
        if (existing) { existing.remove(); return; }
        // 🏠 Activate calculator capture mode immediately
        window._calcModeActive = true;
        window._lastCalcField = null;
        window._lastPopulatedField = null;
        window._pendingHeardValue = null;
        console.log("🏠 Calculator opened — _calcModeActive = true");
        // Full-screen backdrop with blur
        var backdrop = document.createElement("div");
        backdrop.id = "mortgage-calc-backdrop";
        backdrop.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.65);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:999997;display:flex;align-items:center;justify-content:center;";
        backdrop.onclick = function(e) { /* Disabled — calculator stays open until user clicks Send My Results */ };
        var ov = document.createElement("div");
        ov.id = "mortgage-calc-overlay";
        ov.style.cssText = "background:rgba(10,15,30,0.98);display:flex;flex-direction:column;border-radius:20px;width:380px;max-width:95vw;max-height:90vh;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.8);border:2px solid #f8c400;font-family:sans-serif;";
        var hdr = document.createElement("div");
        hdr.style.cssText = "display:flex;justify-content:space-between;align-items:center;padding:18px 20px;background:linear-gradient(135deg,#1e3a5f,#0a1a2f);border-bottom:1px solid rgba(248,196,0,0.3);";
        var hLeft = document.createElement("div");
        hLeft.style.cssText = "display:flex;align-items:center;gap:10px;";
        hLeft.innerHTML = "<span style=\"font-size:1.4rem;\">🏠</span><div><div style=\"color:#f8c400;font-size:1rem;font-weight:700;\">Mortgage Calculator</div><div style=\"color:rgba(255,255,255,0.5);font-size:0.72rem;\">See what you can afford</div></div>";
        var xBtn = document.createElement("button");
        xBtn.textContent = "✕";
        xBtn.style.cssText = "background:rgba(255,255,255,0.1);border:none;color:white;width:30px;height:30px;border-radius:50%;font-size:1rem;cursor:pointer;";
        xBtn.onclick = function() { var bd=document.getElementById("mortgage-calc-backdrop"); if(bd)bd.remove(); else { var ov=document.getElementById("mortgage-calc-overlay"); if(ov)ov.remove(); } window._calcModeActive=false; window._lastCalcField=null; console.log("🏠 Calculator closed"); };
        hdr.appendChild(hLeft); hdr.appendChild(xBtn); ov.appendChild(hdr);
        var body = document.createElement("div");
        body.style.cssText = "padding:16px;overflow-y:auto;";
        function mcField(labelText, inputId, inputType, inputVal, extraAttr, isSelect, options) {
            var wrap = document.createElement("div");
            var lbl = document.createElement("label");
            lbl.style.cssText = "color:rgba(255,255,255,0.6);font-size:0.75rem;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:6px;";
            lbl.textContent = labelText;
            wrap.appendChild(lbl);
            var el;
            if (isSelect) {
                el = document.createElement("select");
                el.style.cssText = "width:100%;padding:10px 14px;background:rgba(10,15,30,0.9);border:1px solid rgba(248,196,0,0.3);border-radius:10px;color:white;font-size:0.9rem;box-sizing:border-box;";
                options.forEach(function(o) {
                    var opt = document.createElement("option");
                    opt.value = o.v; opt.textContent = o.t;
                    if (o.sel) opt.selected = true;
                    el.appendChild(opt);
                });
                el.onchange = window.calcMortgage;
            } else {
                el = document.createElement("input");
                el.type = inputType || "text";
                el.value = inputVal || "";
                el.style.cssText = "width:100%;padding:10px 14px;background:rgba(255,255,255,0.07);border:1px solid rgba(248,196,0,0.3);border-radius:10px;color:white;font-size:1rem;box-sizing:border-box;";
                if (extraAttr) { el.step = extraAttr; }
                el.oninput = window.calcMortgage;
            }
            el.id = inputId;
            wrap.appendChild(el);
            return wrap;
        }
        var grid = document.createElement("div");
        grid.style.cssText = "display:grid;gap:12px;";
        grid.appendChild(mcField("💰 Annual Income","mc-income","number","",null,false,null));

        var rowDownDebt = document.createElement("div");
        rowDownDebt.style.cssText = "display:grid;grid-template-columns:1fr 1fr;gap:10px;";
        rowDownDebt.appendChild(mcField("🏦 Down Payment (%)","mc-down-pct","number","",null,false,null));
        rowDownDebt.appendChild(mcField("💳 Monthly Obligations","mc-debt","number","",null,false,null));
        grid.appendChild(rowDownDebt);

        var rowLoanCredit = document.createElement("div");
        rowLoanCredit.style.cssText = "display:grid;grid-template-columns:1fr 1fr;gap:10px;";
        rowLoanCredit.appendChild(mcField("🏦 Loan Type","mc-loan-type",null,null,null,true,[
            {v:"conventional",t:"Conventional",sel:true},
            {v:"fha",t:"FHA"},
            {v:"va",t:"VA (Military)"},
            {v:"jumbo",t:"Jumbo"},
            {v:"usda",t:"USDA (Rural)"}
        ]));
        rowLoanCredit.appendChild(mcField("📊 Credit Score","mc-credit",null,null,null,true,[
            {v:"0.5",t:"Excellent (760+)"},
            {v:"0.25",t:"Good (700-759)",sel:true},
            {v:"0",t:"Fair (640-699)"},
            {v:"-0.5",t:"Poor (580-639)"}
        ]));
        grid.appendChild(rowLoanCredit);

        // Hidden fields for calculation — not shown to user
        var hiddenTerm = document.createElement("input");
        hiddenTerm.type = "hidden"; hiddenTerm.id = "mc-term"; hiddenTerm.value = "30";
        grid.appendChild(hiddenTerm);
        body.appendChild(grid);
        var res = document.createElement("div");
        res.id = "mc-results";
        res.style.cssText = "margin-top:18px;background:linear-gradient(135deg,rgba(248,196,0,0.12),rgba(248,196,0,0.04));border:1px solid rgba(248,196,0,0.3);border-radius:14px;padding:16px;";
        res.innerHTML = [
            "<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;\">",
            "<div style=\"text-align:center;\"><div style=\"color:rgba(255,255,255,0.5);font-size:0.7rem;text-transform:uppercase;margin-bottom:4px;\">Home Price</div><div id=\"mc-home-price\" style=\"color:#f8c400;font-size:1.3rem;font-weight:700;\">—</div></div>",
            "<div style=\"text-align:center;\"><div style=\"color:rgba(255,255,255,0.5);font-size:0.7rem;text-transform:uppercase;margin-bottom:4px;\">Monthly Payment</div><div id=\"mc-monthly\" style=\"color:#34a853;font-size:1.3rem;font-weight:700;\">—</div></div></div>",
            "<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:12px;\">",
            "<div style=\"text-align:center;\"><div style=\"color:rgba(255,255,255,0.5);font-size:0.7rem;text-transform:uppercase;margin-bottom:4px;\">Loan Amount</div><div id=\"mc-loan\" style=\"color:white;font-size:1rem;font-weight:600;\">—</div></div>",
            "<div style=\"text-align:center;\"><div style=\"color:rgba(255,255,255,0.5);font-size:0.7rem;text-transform:uppercase;margin-bottom:4px;\">Est. DTI</div><div id=\"mc-dti\" style=\"color:white;font-size:1rem;font-weight:600;\">—</div></div></div>",
            "<div id=\"mc-verdict\" style=\"margin-top:12px;text-align:center;font-size:0.8rem;color:rgba(255,255,255,0.6);border-top:1px solid rgba(255,255,255,0.1);padding-top:10px;\"></div>"
        ].join("");
        body.appendChild(res);
        var ctaBtn = document.createElement("button");
        ctaBtn.textContent = "📨 Send My Results →";
        ctaBtn.style.cssText = "width:100%;margin-top:14px;padding:13px;background:linear-gradient(135deg,#f8c400,#d4a000);color:#0a0f1e;border:none;border-radius:12px;font-size:0.95rem;font-weight:700;cursor:pointer;";
        ctaBtn.onclick = function() {
            // Save calc results before switching view
            if (typeof window.calcMortgage === "function") window.calcMortgage();
            window._calcModeActive = false;
            window._lastCalcField = null;
            window._collectingContact = true;
            console.log("📨 Send My Results clicked — showing contact form");
            // Replace body content with contact form — keep overlay open
            body.innerHTML = [
                "<div style='padding:10px 0;'>",
                "<div style='color:#f8c400;font-size:1rem;font-weight:700;margin-bottom:6px;text-align:center;'>🎉 Great news! Let's send your results.</div>",
                "<div style='color:rgba(255,255,255,0.6);font-size:0.8rem;text-align:center;margin-bottom:18px;'>A loan officer will follow up with your qualification summary.</div>",
                "<div style='margin-bottom:12px;'><label style='color:rgba(255,255,255,0.6);font-size:0.72rem;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:6px;'>👤 Full Name</label>",
                "<input id='contact-name' name='name' autocomplete='name' type='text' placeholder='Your full name' style='width:100%;padding:10px 14px;background:rgba(255,255,255,0.07);border:1px solid rgba(248,196,0,0.3);border-radius:10px;color:white;font-size:1rem;box-sizing:border-box;outline:none;'></div>",
                "<div style='margin-bottom:12px;'><label style='color:rgba(255,255,255,0.6);font-size:0.72rem;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:6px;'>📧 Email Address</label>",
                "<input id='contact-email' name='email' autocomplete='email' type='email' placeholder='your@email.com' style='width:100%;padding:10px 14px;background:rgba(255,255,255,0.07);border:1px solid rgba(248,196,0,0.3);border-radius:10px;color:white;font-size:1rem;box-sizing:border-box;outline:none;'></div>",
                "<div style='margin-bottom:18px;'><label style='color:rgba(255,255,255,0.6);font-size:0.72rem;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:6px;'>📞 Phone Number</label>",
                "<input id='contact-phone' name='tel' autocomplete='tel' type='tel' placeholder='(555) 555-5555' style='width:100%;padding:10px 14px;background:rgba(255,255,255,0.07);border:1px solid rgba(248,196,0,0.3);border-radius:10px;color:white;font-size:1rem;box-sizing:border-box;outline:none;'></div>",
                "<button id='submit-contact-btn' style='width:100%;padding:13px;background:linear-gradient(135deg,#f8c400,#d4a000);color:#0a0f1e;border:none;border-radius:12px;font-size:0.95rem;font-weight:700;cursor:pointer;'>📨 Send My Results Now</button>",
                "<div style='text-align:center;color:rgba(255,255,255,0.3);font-size:0.7rem;margin-top:8px;'>Your information is kept private and secure.</div>",
                "</div>"
            ].join("");
            // Wire submit button after DOM update
            setTimeout(function() {
                var submitBtn = document.getElementById("submit-contact-btn");
                if (submitBtn) {
                    submitBtn.onclick = function() {
                        var name  = document.getElementById("contact-name")?.value?.trim();
                        var email = document.getElementById("contact-email")?.value?.trim();
                        var phone = document.getElementById("contact-phone")?.value?.trim();
                        if (!name || !email) {
                            alert("Please enter your name and email to continue.");
                            return;
                        }
                        var calcData = window._calcResults || {};
                        if (typeof emailjs !== "undefined") {
                            // ===== DEMO MODE: send the CLIENT/lead-notification email to whatever address
                            // the demo viewer typed in, so they experience exactly what they'd receive as
                            // a business owner when one of their own prospects submits the calculator. =====
                            var leadEmailParams = {
                                to_email:             email,
                                full_name:            name,
                                email:                email,
                                phone:                phone || "Not provided",
                                message:              "New home loan pre-qualification lead from the mortgage calculator.",
                                submitted_at:         new Date().toLocaleString(),
                                calc_annual_income:   calcData.income     || "Not provided",
                                calc_down_payment:    calcData.down       || "Not provided",
                                calc_credit_score:    calcData.credit     || "Not provided",
                                calc_loan_term:       calcData.term       || "Not provided",
                                calc_interest_rate:   calcData.rate       || "Not provided",
                                calc_home_price:      calcData.homePrice  || "Not provided",
                                calc_monthly_payment: calcData.monthly    || "Not provided",
                                calc_loan_amount:     calcData.loanAmount || "Not provided",
                                calc_dti:             calcData.dti        || "Not provided",
                                calc_verdict:         calcData.verdict    || ""
                            };
                            emailjs.send("service_b9bppgb", "template_uix9cyx", leadEmailParams)
                                .then(function() { console.log("✅ [DEMO] Lead notification email sent to:", email); })
                                .catch(function(e) { console.error("❌ [DEMO] Lead email error:", e); });

                            // ===== DEMO COPY: same email, also sent to you for verification =====
                            var demoCopyEmail = window.BotemiaConfig?.modules?.emailConfig?.loanOfficerEmail || "bizboost.expert@gmail.com";
                            var demoCopyParams = Object.assign({}, leadEmailParams, { to_email: demoCopyEmail });
                            emailjs.send("service_b9bppgb", "template_uix9cyx", demoCopyParams)
                                .then(function() { console.log("✅ [DEMO] Copy of lead email sent to:", demoCopyEmail); })
                                .catch(function(e) { console.error("❌ [DEMO] Copy email error:", e); });
                        }
                        // Notify Tess to trigger email confirmation smart screen
                        if (window.mainWidget && typeof window.mainWidget.sendMessage === "function") {
                            window.mainWidget.sendMessage("Your confirmation has been sent");
                        }
                        window._collectingContact = false;
                        console.log("✅ Contact collected — name:", name, "email:", email, "phone:", phone);

                        // ===== DEMO: show a confirmation screen with a link to the prospect-side email mockup =====
                        var mockupParams = new URLSearchParams({
                            name: name,
                            email: email,
                            homePrice: calcData.homePrice || "",
                            monthly: calcData.monthly || "",
                            loanAmount: calcData.loanAmount || "",
                            dti: calcData.dti || "",
                            verdict: calcData.verdict || ""
                        }).toString();
                        var mockupUrl = "https://mobilewise.netlify.app/prospect-example-email?" + mockupParams;
                        body.innerHTML = [
                            "<div style='padding:20px 4px;text-align:center;'>",
                            "<div style='font-size:2rem;margin-bottom:6px;'>✅</div>",
                            "<div style='color:#fff;font-size:1.1rem;font-weight:700;margin-bottom:8px;'>Lead notification sent!</div>",
                            "<div style='color:rgba(255,255,255,0.6);font-size:0.85rem;margin-bottom:24px;line-height:1.5;'>That's exactly what you'd receive as a business owner whenever one of your own website prospects completes this calculator.</div>",
                            "<a href='" + mockupUrl + "' target='_blank' rel='noopener' style='display:inline-block;width:100%;box-sizing:border-box;padding:13px;background:linear-gradient(135deg,#f8c400,#d4a000);color:#0a0f1e;border-radius:12px;font-size:0.95rem;font-weight:700;text-decoration:none;margin-bottom:10px;'>📧 See what your prospect receives →</a>",
                            "<button id='demo-close-btn' style='width:100%;padding:13px;background:rgba(255,255,255,0.08);color:#fff;border:1px solid rgba(255,255,255,0.15);border-radius:12px;font-size:0.9rem;font-weight:600;cursor:pointer;'>Close</button>",
                            "</div>"
                        ].join("");
                        setTimeout(function() {
                            var closeBtn = document.getElementById("demo-close-btn");
                            if (closeBtn) {
                                closeBtn.onclick = function() {
                                    var bd = document.getElementById("mortgage-calc-backdrop");
                                    if (bd) bd.remove();
                                };
                            }
                        }, 50);
                    };
                }
            }, 100);
        };
        body.appendChild(ctaBtn);
        var disc = document.createElement("div");
        disc.style.cssText = "text-align:center;color:rgba(255,255,255,0.3);font-size:0.7rem;margin-top:8px;";
        disc.textContent = "Results are estimates. Actual qualification depends on full credit review.";
        body.appendChild(disc);
        // Hidden rate input — uses current market rate, not shown to user
        var hiddenRate = document.createElement("input");
        hiddenRate.type = "hidden"; hiddenRate.id = "mc-rate"; hiddenRate.value = "7.25";
        body.appendChild(hiddenRate);
        ov.appendChild(body); backdrop.appendChild(ov); document.body.appendChild(backdrop);
        window.calcMortgage();
    };

    // 🎙️ SPOKEN NUMBER PARSER
    window.parseSpokenNumber = function(text) {
        var t = text.toLowerCase().trim();
        // Direct numeric string
        var direct = parseFloat(t.replace(/[^0-9.]/g, ""));
        if (!isNaN(direct) && direct > 0) return direct;
        // Word-to-number map
        var words = {
            "zero":0,"one":1,"two":2,"three":3,"four":4,"five":5,
            "six":6,"seven":7,"eight":8,"nine":9,"ten":10,
            "eleven":11,"twelve":12,"thirteen":13,"fourteen":14,"fifteen":15,
            "sixteen":16,"seventeen":17,"eighteen":18,"nineteen":19,"twenty":20,
            "thirty":30,"forty":40,"fifty":50,"sixty":60,"seventy":70,
            "eighty":80,"ninety":90,"hundred":100,"thousand":1000,"million":1000000
        };
        // Handle "point" for decimals e.g. "seven point two five"
        if (t.indexOf("point") !== -1) {
            var parts = t.split("point");
            var intPart = window.parseSpokenNumber(parts[0].trim());
            var decStr = parts[1].trim().split(/\s+/).map(function(w){return words[w]!==undefined?words[w]:w;}).join("");
            return parseFloat(intPart + "." + decStr);
        }
        // Build number from words
        var tokens = t.split(/[\s,]+/);
        var result = 0; var current = 0;
        tokens.forEach(function(token) {
            var val = words[token];
            if (val === undefined) { val = parseFloat(token); }
            if (isNaN(val)) return;
            if (val === 100) { current = current > 0 ? current * 100 : 100; }
            else if (val >= 1000) { result += (current > 0 ? current : 1) * val; current = 0; }
            else { current += val; }
        });
        return result + current || null;
    };

    // 🎙️ POPULATE CALCULATOR FIELD FROM VOICE INPUT
    window.populateCalcField = function(fieldName, spokenValue) {
        var calcOpen = !!document.getElementById("mortgage-calc-overlay");
        if (!calcOpen) return false;
        var val = null;
        var lower = spokenValue.toLowerCase().trim();
        if (fieldName === "annualIncome" || fieldName === "monthlyIncome") {
            var num = window.parseSpokenNumber(spokenValue);
            if (num) {
                // If monthly, convert to annual
                if (fieldName === "monthlyIncome") num = num * 12;
                var el = document.getElementById("mc-income");
                if (el) { el.value = Math.round(num); window.calcMortgage(); }
                return true;
            }
        } else if (fieldName === "downPayment") {
            var lower2 = spokenValue.toLowerCase();
            var el = document.getElementById("mc-down-pct");
            if (!el) return false;
            // Handle percentage — write directly
            if (lower2.includes("percent") || lower2.includes("%")) {
                var pct = window.parseSpokenNumber(spokenValue);
                if (pct !== null) {
                    el.value = Math.round(pct);
                    window.calcMortgage();
                    console.log("🏠 Down payment set directly: " + pct + "%");
                    return true;
                }
            }
            // Handle dollar amount — convert to % of estimated home price
            var num = window.parseSpokenNumber(spokenValue);
            if (num !== null) {
                var incomeEl = document.getElementById("mc-income");
                var income = incomeEl ? parseFloat(incomeEl.value) || 85000 : 85000;
                var estHome = income * 3.5; // rough 3.5x income estimate
                var pctFromDollars = estHome > 0 ? (num / estHome) * 100 : 0;
                el.value = Math.round(pctFromDollars);
                window.calcMortgage();
                console.log("🏠 Down payment $" + num + " ≈ " + Math.round(pctFromDollars) + "%");
                return true;
            }
        } else if (fieldName === "creditScore") {
            var sel = document.getElementById("mc-credit");
            if (sel) {
                if (lower.includes("excellent") || lower.includes("760")) { sel.value = "0.5"; }
                else if (lower.includes("good") || lower.includes("700") || lower.includes("720") || lower.includes("740")) { sel.value = "0.25"; }
                else if (lower.includes("fair") || lower.includes("640") || lower.includes("660") || lower.includes("680")) { sel.value = "0"; }
                else if (lower.includes("poor") || lower.includes("580") || lower.includes("600") || lower.includes("620")) { sel.value = "-0.5"; }
                else {
                    var scoreNum = window.parseSpokenNumber(spokenValue);
                    if (scoreNum >= 760) sel.value = "0.5";
                    else if (scoreNum >= 700) sel.value = "0.25";
                    else if (scoreNum >= 640) sel.value = "0";
                    else if (scoreNum >= 580) sel.value = "-0.5";
                }
                window.calcMortgage();
                return true;
            }
        } else if (fieldName === "loanTerm") {
            var sel = document.getElementById("mc-term");
            if (sel) {
                if (lower.includes("15")) { sel.value = "15"; }
                else if (lower.includes("20")) { sel.value = "20"; }
                else { sel.value = "30"; }
                window.calcMortgage();
                return true;
            }
        } else if (fieldName === "monthlyDebt") {
            var num = window.parseSpokenNumber(spokenValue);
            if (num !== null) {
                var el = document.getElementById("mc-debt");
                if (el) { el.value = Math.round(num); window.calcMortgage(); }
                return true;
            }
        } else if (fieldName === "loanType") {
            var lt = spokenValue.toLowerCase();
            var sel3 = document.getElementById("mc-loan-type");
            if (sel3) {
                if (lt.includes("va") || lt.includes("veteran") || lt.includes("military")) sel3.value = "va";
                else if (lt.includes("fha")) sel3.value = "fha";
                else if (lt.includes("jumbo")) sel3.value = "jumbo";
                else if (lt.includes("usda") || lt.includes("rural")) sel3.value = "usda";
                else sel3.value = "conventional";
                window.calcMortgage();
                return true;
            }
        }
        return false;
    };

    window.calcMortgage = function() {
        var income=parseFloat(document.getElementById("mc-income")?.value)||0;
        var downPct=parseFloat(document.getElementById("mc-down-pct")?.value)||0;
        var loanTypeEl=document.getElementById("mc-loan-type");
        var loanType=loanTypeEl?loanTypeEl.value:"conventional";
        var debt=parseFloat(document.getElementById("mc-debt")?.value)||0;
        var creditAdj=parseFloat(document.getElementById("mc-credit")?.value)||0;
        var term=parseInt(document.getElementById("mc-term")?.value)||30;
        var rate=parseFloat(document.getElementById("mc-rate")?.value)-creditAdj;
        if(!income)return;
        var mr=rate/100/12,n=term*12,gm=income/12;
        // Back-end DTI: max total debt (including new mortgage) = 43% of gross monthly
        // Front-end DTI: max housing payment = 28% of gross monthly
        // Calculate dollar down from % of estimated home price
        // Use 3.5x income as rough home price estimate for initial calc
        var estHomeForDown = income * 3.5;
        var downDollar = estHomeForDown * (downPct / 100);
        var maxHousingPayment = (gm * 0.43) - debt; // remaining room after existing debt
        if (maxHousingPayment < gm * 0.1) maxHousingPayment = gm * 0.1; // floor
        var mp = Math.min(maxHousingPayment, gm * 0.28); // front-end cap
        var maxLoan=mr>0?mp*(1-Math.pow(1+mr,-n))/mr:mp*n;
        var maxHome=maxLoan+downDollar;
        var pmt=mr>0?maxLoan*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1):maxLoan/n;
        var dti=gm>0?(((pmt+debt)/gm)*100).toFixed(1):0;
        var fmt=function(v){return "$"+Math.round(v).toLocaleString();};
        var hp=document.getElementById("mc-home-price");if(hp)hp.textContent=fmt(maxHome*0.9)+"\u2013"+fmt(maxHome);
        var mp2=document.getElementById("mc-monthly");if(mp2)mp2.textContent=fmt(pmt)+"/mo";
        var la=document.getElementById("mc-loan");if(la)la.textContent=fmt(maxLoan);
        var de=document.getElementById("mc-dti");if(de){de.textContent=dti+"%";de.style.color=parseFloat(dti)<=28?"#34a853":parseFloat(dti)<=36?"#f8c400":"#f44336";}
        var ve=document.getElementById("mc-verdict");if(ve)ve.textContent=parseFloat(dti)<=28?"\u2705 Strong profile \u2014 you qualify well!":parseFloat(dti)<=36?"\u26a0\ufe0f Good profile. A larger down payment could help.":"\ud83d\udccb Higher DTI \u2014 let's talk through your options.";

        // Save results so "Send My Results" email actually includes real calculator data
        var creditLabels = {"0.5":"Excellent (760+)","0.25":"Good (700-759)","0":"Fair (640-699)","-0.5":"Poor (580-639)"};
        window._calcResults = {
            income: income ? "$"+Math.round(income).toLocaleString() : "Not provided",
            debt: debt ? "$"+Math.round(debt).toLocaleString()+"/mo" : "$0/mo",
            down: downPct ? downPct+"%" : "Not provided",
            credit: creditLabels[String(creditAdj)] || "Not provided",
            term: term+" Years",
            rate: rate ? rate.toFixed(2)+"%" : "Not provided",
            homePrice: hp ? hp.textContent : "Not provided",
            monthly: mp2 ? mp2.textContent : "Not provided",
            loanAmount: la ? la.textContent : "Not provided",
            dti: de ? de.textContent : "Not provided",
            verdict: ve ? ve.textContent : ""
        };
    };

    // =========================================
    // 🍋 SUPABASE REALTIME SETUP (ASYNC SAFE)
    // =========================================
    (function() {
        const SUPABASE_URL = "https://fcgbusobfdwnpoqyuzoe.supabase.co";
        const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjZ2J1c29iZmR3bnBvcXl1em9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzNDA2MjMsImV4cCI6MjA4NTkxNjYyM30.FHEZnxuGHSn_Z3gw9d_Txtfz5Jn55J6qonl8rnA3gPk";
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
        
        // ✅ FIX: We only run Supabase code AFTER library is fully loaded
        script.onload = function() {
            const { createClient } = supabase;
            const sbClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
                realtime: { params: { eventsPerSecond: 10 } }
            });
            
            const tcsChannel = sbClient.channel("tess-commands");
            
            tcsChannel.on("broadcast", { event: "command" }, function(payload) {
                console.log("📡 [REALTIME] Command received:", payload);
                var cmd = payload.payload?.command;
                var mod = payload.payload?.module;
                var phrase = (payload.payload?.trigger_phrase || "").toLowerCase();
                
                // ===== EMAIL COMMAND =====
                if (cmd === "SEND_EMAIL") {
                    console.log("📧 Email command received from TCS!");
                    if (window.preQualController && window.preQualController.isActive) {
                        window.preQualController.sendEmail();
                        window.preQualController.isActive = false;
                        console.log("✅ Email sent via TCS command");
                    } else {
                        console.warn("⚠️ Cannot send email - controller not active. Sending test confirmation...");
                        window.supabaseChannel.send({
                            type: "broadcast",
                            event: "trigger_test_result",
                            payload: {
                                module: "email_trigger",
                                success: true,
                                message: "Email trigger recognized (controller not active, but trigger detected)"
                            }
                        });
                    }
                }
                
                // ===== SEND TEST EMAIL COMMAND =====
                if (cmd === "SEND_TEST_EMAIL") {
                    console.log("📧 Test email command received from TCS!");
                    
                    // Populate sample answers
                    if (window.preQualController) {
                        window.preQualController.answers = {
                            fullName: "Test Prospect",
                            email: payload.payload?.test_email || "test@example.com",
                            phone: "555-0123",
                            businessName: "Test Business",
                            scheduledDateTime: "Tomorrow 2pm",
                            specialRequests: "TCS Test Email"
                        };
                        window.preQualController.sendEmail();
                        
                        window.supabaseChannel.send({
                            type: "broadcast",
                            event: "trigger_test_result",
                            payload: {
                                module: "email_trigger",
                                success: true,
                                message: "✅ Test email sent to prospect & agency"
                            }
                        });
                    } else {
                        window.supabaseChannel.send({
                            type: "broadcast",
                            event: "trigger_test_result",
                            payload: {
                                module: "email_trigger",
                                success: false,
                                message: "❌ Controller not available"
                            }
                        });
                    }
                }
                
                // ===== PHONE CONNECT COMMAND =====
                if (cmd === "PHONE_CONNECT") {
                    console.log("📞 Phone connect command received from TCS!");
                    const phoneNumber = window.BotemiaConfig?.modules?.emailConfig?.supportPhone || "949-228-5263";
                    console.log("📞 Would initiate call to:", phoneNumber);
                    window.supabaseChannel.send({
                        type: "broadcast",
                        event: "trigger_test_result",
                        payload: {
                            module: "phone_connect",
                            success: true,
                            message: "Phone trigger recognized — would dial " + phoneNumber
                        }
                    });
                }
                
                // ===== SMART SCREEN COMMAND =====
                if (cmd === "SHOW_SMART_SCREEN") {
                    console.log("📸 Smart Screen command received:", payload.payload);
                    if (typeof window.showSmartScreen === "function") {
                        window.showSmartScreen(payload.payload.trigger, payload.payload.image);
                    }
                }
                
                // ===== TEST TRIGGER COMMAND (For TCS test buttons) =====
                if (cmd === "test_trigger") {
                    console.log("🧪 TCS Test: " + mod + " - " + phrase);
                    var result = { success: false, message: "No trigger matched" };
                    
                    // --- SMART SCREEN: Actually launch it ---
                    if (mod === "smart_screen") {
                        var images = window.BotemiaConfig?.modules?.smartScreen?.images || [];
                        var calcOpen = !!document.getElementById("mortgage-calc-backdrop");
                        for (var i = 0; i < images.length; i++) {
                            if (calcOpen) break; // Don't fire smart screens while calculator is open
                            var imgTriggers = images[i].triggerMatch || [];
                            for (var j = 0; j < imgTriggers.length; j++) {
                                if (imgTriggers[j] && phrase.indexOf(imgTriggers[j].toLowerCase()) !== -1) {
                                    result = { success: true, message: "✅ Smart Screen launched: " + images[i].name };
                                    var overlay = document.createElement("div");
                                    overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.65);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:999998;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:20px;";
                                    overlay.id = "tcs-test-overlay";
                                    overlay.onclick = function() { overlay.remove(); };
                                    var imgEl = document.createElement("img");
                                    imgEl.src = images[i].url;
                                    imgEl.style.cssText = "width:100%;max-height:80vh;object-fit:contain;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.5);";
                                    overlay.appendChild(imgEl);
                                    if (images[i].name) {
                                        var caption = document.createElement("div");
                                        caption.style.cssText = "color:white;font-size:1.5rem;margin-top:20px;font-weight:600;";
                                        caption.textContent = images[i].name;
                                        overlay.appendChild(caption);
                                    }
                                    document.body.appendChild(overlay);
                                    if (window.supabaseChannel) {
                                        window.supabaseChannel.send({
                                            type: "broadcast", event: "trigger_test_result",
                                            payload: { module: mod, success: result.success, message: result.message, timestamp: Date.now() }
                                        });
                                    }
                                    break;
                                }
                            }
                            if (result.success) break;
                        }
                        if (!result.success) result.message = "❌ No smart screen trigger matched";
                    }
                    
                    // --- EMAIL: Actually send it ---
                    if (mod === "email_trigger") {
                        var emailTriggers = window.BotemiaConfig?.modules?.emailConfig?.emailTriggers || [];
                        for (var e = 0; e < emailTriggers.length; e++) {
                            if (emailTriggers[e] && phrase.indexOf(emailTriggers[e].toLowerCase()) !== -1) {
                                result = { success: true, message: "✅ Email sent" };
                                if (window.preQualController && window.preQualController.isActive) {
                                    window.preQualController.sendEmail();
                                    window.preQualController.isActive = false;
                                }
                                if (window.supabaseChannel) {
                                    window.supabaseChannel.send({
                                        type: "broadcast", event: "trigger_test_result",
                                        payload: { module: mod, success: result.success, message: result.message, timestamp: Date.now() }
                                    });
                                }
                                break;
                            }
                        }
                        if (!result.success) result.message = "❌ No email trigger matched";
                    }
                    
                    // --- PHONE: Actually dial ---
                    if (mod === "phone_connect") {
                        var phoneTriggers = window.BotemiaConfig?.modules?.emailConfig?.phoneTriggers || [];
                        for (var p = 0; p < phoneTriggers.length; p++) {
                            if (phoneTriggers[p] && phrase.indexOf(phoneTriggers[p].toLowerCase()) !== -1) {
                                var pn = window.BotemiaConfig?.modules?.emailConfig?.supportPhone || "949-228-5263";
                                result = { success: true, message: "✅ Dialing " + pn };
                                // Show phone number overlay for desktop users
                                var phoneOverlay = document.createElement("div");
                                phoneOverlay.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(10,15,30,0.97);z-index:999999;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px;border-radius:20px;border:2px solid #f8c400;text-align:center;";
                                var phoneTitle = window.BotemiaConfig?.modules?.emailConfig?.phoneOverlayTitle || "Call Your Conversion Expert";
                                var phoneSubtitle = window.BotemiaConfig?.modules?.emailConfig?.phoneOverlaySubtitle || "We're ready to help you right now";
                                phoneOverlay.innerHTML = '<div style="font-size:3rem;margin-bottom:15px;">📞</div><div style="color:white;font-size:1.4rem;font-weight:700;margin-bottom:8px;">' + phoneTitle + '</div><div style="color:#f8c400;font-size:2rem;font-weight:700;margin-bottom:20px;">' + pn + '</div><div style="color:rgba(255,255,255,0.5);font-size:0.85rem;margin-bottom:20px;">' + phoneSubtitle + '</div><button onclick="this.parentElement.remove()" style="background:#f8c400;color:#0a0f1e;border:none;padding:12px 30px;border-radius:30px;font-size:1rem;font-weight:600;cursor:pointer;">✕ Close</button>';
                                phoneOverlay.onclick = function(e) { if (e.target === phoneOverlay) phoneOverlay.remove(); };
                                document.body.appendChild(phoneOverlay);
                                window.open("tel:" + pn, "_blank");
                                if (window.supabaseChannel) {
                                    window.supabaseChannel.send({
                                        type: "broadcast", event: "trigger_test_result",
                                        payload: { module: mod, success: result.success, message: result.message, timestamp: Date.now() }
                                    });
                                }
                                break;
                            }
                        }
                        if (!result.success) result.message = "❌ No phone trigger matched";
                    }
                    
                    // --- PRE-QUAL: Actually start it ---
                    if (mod === "pre_qual") {
                        var pqTrigger = window.BotemiaConfig?.modules?.preQualification?.triggerPhrase || "";
                        if (pqTrigger && phrase.indexOf(pqTrigger.toLowerCase()) !== -1) {
                            result = { success: true, message: "✅ Pre-qual started" };
                            if (window.preQualController && !window.preQualController.isActive) {
                                forcePreQualification();
                            }
                            if (window.supabaseChannel) {
                                window.supabaseChannel.send({
                                    type: "broadcast", event: "trigger_test_result",
                                    payload: { module: mod, success: true, message: "✅ Pre-qual interview started", timestamp: Date.now() }
                                });
                            }
                        } else {
                            result.message = "❌ Pre-qual trigger not matched";
                            if (window.supabaseChannel) {
                                window.supabaseChannel.send({
                                    type: "broadcast", event: "trigger_test_result",
                                    payload: { module: mod, success: false, message: result.message, timestamp: Date.now() }
                                });
                            }
                        }
                    }
                    
                    // --- WEBSITE INFO ---
                    if (mod === "website_info") {
                        var webInfo = window.BotemiaConfig?.modules?.websiteInfo;
                        var webLinks = webInfo?.links || [];
                        for (var w = 0; w < webLinks.length; w++) {
                            if (webLinks[w].triggerPhrase && phrase.indexOf(webLinks[w].triggerPhrase.toLowerCase()) !== -1) {
                                result = { success: true, message: "✅ Website Info: " + webLinks[w].title };
                                if (window.supabaseChannel) {
                                    window.supabaseChannel.send({
                                        type: "broadcast", event: "trigger_test_result",
                                        payload: { module: mod, success: true, message: "✅ Website Info: " + webLinks[w].title, timestamp: Date.now() }
                                    });
                                }
                                // Show the link overlay
                                var webOverlay = document.createElement("div");
                                webOverlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.65);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:999998;display:flex;align-items:center;justify-content:center;";
                                var webHeader = document.createElement("div");
                                webHeader.style.cssText = "display:flex;justify-content:space-between;align-items:center;padding:15px 20px;background:rgba(0,0,0,0.5);border-bottom:1px solid #f8c400;";
                                var webTitle = document.createElement("span");
                                webTitle.style.cssText = "color:#f8c400;font-size:1.1rem;font-weight:600;";
                                webTitle.textContent = webLinks[w].title;
                                webHeader.appendChild(webTitle);
                                var webClose = document.createElement("button");
                                webClose.textContent = "✕";
                                webClose.style.cssText = "background:#f44336;color:white;border:none;width:32px;height:32px;border-radius:50%;font-size:1rem;cursor:pointer;";
                                webClose.onclick = function() { webOverlay.remove(); };
                                webHeader.appendChild(webClose);
                                webOverlay.appendChild(webHeader);
                                var webFrame = document.createElement("iframe");
                                webFrame.src = webLinks[w].url;
                                webFrame.style.cssText = "width:800px;max-width:90vw;height:75vh;border:none;";
                                webOverlay.appendChild(webFrame);
                                document.body.appendChild(webOverlay);
                                if (window.supabaseChannel) {
                                    window.supabaseChannel.send({
                                        type: "broadcast", event: "trigger_test_result",
                                        payload: { module: mod, success: result.success, message: result.message, timestamp: Date.now() }
                                    });
                                }
                                break;
                            }
                        }
                        if (!result.success) result.message = "❌ No website info trigger matched";
                    }
                    // --- TESTIMONIALS ---
                    if (mod === "testimonials") {
                        var groups = window.BotemiaConfig?.modules?.testimonial?.groups || [];
                        var matchedGroup = null;
                        for (var g = 0; g < groups.length; g++) {
                            if (groups[g].triggerPhrase && phrase.indexOf(groups[g].triggerPhrase.toLowerCase()) !== -1) {
                                matchedGroup = groups[g];
                                break;
                            }
                        }
                        if (matchedGroup) {
                            result = { success: true, message: "✅ Testimonial playing: " + matchedGroup.triggerPhrase };
                            // Play the first video in the matched group
                            if (matchedGroup.videos && matchedGroup.videos.length > 0) {
                                var videoUrl = matchedGroup.videos[0];
                                var videoOverlay = document.createElement("div");
                                videoOverlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.75);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:999999;display:flex;align-items:center;justify-content:center;flex-direction:column;";
                                videoOverlay.onclick = function() { videoOverlay.remove(); };
                                var videoEl = document.createElement("video");
                                videoEl.src = videoUrl;
                                videoEl.controls = true;
                                videoEl.autoplay = true;
                                videoEl.style.cssText = "max-width:90%;max-height:80vh;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,0.5);";
                                videoOverlay.appendChild(videoEl);
                                if (matchedGroup.name) {
                                    var vidCaption = document.createElement("div");
                                    vidCaption.style.cssText = "color:white;font-size:1.3rem;margin-top:15px;font-weight:600;";
                                    vidCaption.textContent = matchedGroup.name;
                                var closeBtn = document.createElement("button");
                                closeBtn.textContent = "✕ Close";
                                closeBtn.style.cssText = "margin-top:12px;padding:8px 25px;background:#f8c400;color:#0a0f1e;border:none;border-radius:30px;font-size:0.9rem;font-weight:600;cursor:pointer;";
                                closeBtn.onclick = function() { videoOverlay.remove(); };
                                videoOverlay.appendChild(closeBtn);
                                    videoOverlay.appendChild(vidCaption);
                                }
                                document.body.appendChild(videoOverlay);
                            }
                        } else {
                            result.message = "❌ No testimonial trigger matched";
                        }
                    }
                    // --- VIDEO VAULT ---
                    if (mod === "video_vault") {
                        var videos = window.BotemiaConfig?.modules?.videoVault?.videos || [];
                        var matchedVideo = null;
                        for (var v = 0; v < videos.length; v++) {
                            if (videos[v].triggerPhrase && phrase.indexOf(videos[v].triggerPhrase.toLowerCase()) !== -1) {
                                matchedVideo = videos[v];
                                break;
                            }
                        }
                        if (matchedVideo) {
                            result = { success: true, message: "✅ Video playing: " + matchedVideo.triggerPhrase };
                            var videoOverlay = document.createElement("div");
                            videoOverlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.75);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:999999;display:flex;align-items:center;justify-content:center;flex-direction:column;";
                            videoOverlay.onclick = function() { videoOverlay.remove(); };
                            var videoEl = document.createElement("video");
                            videoEl.src = matchedVideo.url;
                            videoEl.controls = true;
                            videoEl.autoplay = true;
                            videoEl.style.cssText = "max-width:90%;max-height:80vh;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,0.5);";
                            videoOverlay.appendChild(videoEl);
                            if (matchedVideo.name) {
                                var vidCaption = document.createElement("div");
                                vidCaption.style.cssText = "color:white;font-size:1.3rem;margin-top:15px;font-weight:600;";
                                vidCaption.textContent = matchedVideo.name;
                                var closeBtn = document.createElement("button");
                                closeBtn.textContent = "✕ Close";
                                closeBtn.style.cssText = "margin-top:12px;padding:8px 25px;background:#f8c400;color:#0a0f1e;border:none;border-radius:30px;font-size:0.9rem;font-weight:600;cursor:pointer;";
                                closeBtn.onclick = function() { videoOverlay.remove(); };
                                videoOverlay.appendChild(closeBtn);
                                videoOverlay.appendChild(vidCaption);
                            }
                            document.body.appendChild(videoOverlay);
                        } else {
                            result.message = "❌ No video trigger matched";
                        }
                    }

                    // --- MORTGAGE CALCULATOR ---
                    if (mod === "mortgage_calc") {
                        var mcCfg = window.BotemiaConfig?.modules?.mortgageCalc;
                        if (mcCfg?.enabled && mcCfg.triggerPhrase && phrase.indexOf(mcCfg.triggerPhrase.toLowerCase()) !== -1) {
                            if (typeof window.showMortgageCalculator === "function") {
                                window.showMortgageCalculator();
                                result = { success: true, message: "✅ Mortgage Calculator launched" };
                            } else {
                                result = { success: false, message: "❌ Calculator function not loaded" };
                            }
                        } else {
                            result = { success: false, message: "❌ Mortgage Calculator trigger not matched or disabled" };
                        }
                        if (window.supabaseChannel) {
                            window.supabaseChannel.send({
                                type: "broadcast", event: "trigger_test_result",
                                payload: { module: mod, success: result.success, message: result.message, timestamp: Date.now() }
                            });
                        }
                    }
                }
            });
            
            tcsChannel.subscribe(function(status) { 
                if (status === "SUBSCRIBED") console.log("✅ [REALTIME] Connected to Supabase"); 
            });
            window.supabaseChannel = tcsChannel;
            
            // Health monitor channel
            var healthChannel = sbClient.channel("health-monitor");
            healthChannel.subscribe(function(status) {
                if (status === "SUBSCRIBED") console.log("🩺 Health monitor channel connected");
            });
            window.healthChannel = healthChannel;
            healthChannel.on("broadcast", { event: "test_ping" }, function(payload) {
                healthChannel.send({
                    type: "broadcast", event: "test_pong",
                    payload: { clientId: window.BotemiaConfig?.id || "unknown", timestamp: Date.now(), echoTimestamp: payload.payload.timestamp }
                });
            });
        }; // END script.onload
        document.head.appendChild(script);
    })(); // END Supabase IIFE
    function trackEvent(eventType, eventData = {}) {
        const payload = {
            client_id: window.BotemiaConfig?.id || 'unknown',
            session_id: window.tessSessionId || 'unknown',
            event_type: eventType,
            event_data: eventData,
            source_url: window.location.href,
            referrer: document.referrer || 'direct',
            timestamp: Date.now()
        };
        
        // Send to Edge Function (writes to analytics_events table)
        fetch("https://fcgbusobfdwnpoqyuzoe.supabase.co/functions/v1/analytics-ingest", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjZ2J1c29iZmR3bnBvcXl1em9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzNDA2MjMsImV4cCI6MjA4NTkxNjYyM30.FHEZnxuGHSn_Z3gw9d_Txtfz5Jn55J6qonl8rnA3gPk"
            },
            body: JSON.stringify(payload)
        }).then(r => r.json()).then(d => console.log("📊 Stored:", eventType, d.success ? "✅" : "❌")).catch(e => console.error("Track error:", e));
        
        // Also broadcast via Realtime for dashboard live updates
        if (window.supabaseChannel) {
            window.supabaseChannel.send({
                type: 'broadcast',
                event: 'analytics_event',
                payload: payload
            });
        }
        console.log('📊 Tracked: ' + eventType, eventData);
    }

    window.preQualController = new PreQualificationController();
    console.log("✅ Controller created (Listener Mode)");
    window.broadcastTessTranscript = function(text) {
        if (window.supabaseChannel) {
            window.supabaseChannel.send({ type: 'broadcast', event: 'tess_transcript', payload: { type: 'TESS_TRANSCRIPT', text: text, timestamp: Date.now() } });
        }
    };

    // ==========================================
    // 🍋 DAILY SDK LOADER
    // ==========================================
    function loadDailySDK() {
        return new Promise((resolve, reject) => {
            if (typeof DailyIframe !== "undefined") {
                resolve();
                return;
            }
            const script = document.createElement("script");
            script.src = "https://unpkg.com/@daily-co/daily-js";
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    async function initDaily() {
        console.log("📞 initDaily: Starting process...");
        
        // 1. AGGRESSIVE WAIT: Ensure SDK is loaded
        if (typeof DailyIframe === "undefined") {
            console.log("⏳ Daily SDK missing. Loading & Waiting...");
            try {
                await loadDailySDK();
                if (typeof DailyIframe === "undefined") {
                    console.error("❌ Failed to load Daily SDK after waiting.");
                    return;
                }
            } catch (e) {
                console.error("❌ Error loading Daily SDK:", e);
                return;
            }
        }

        console.log("✅ Daily SDK loaded. Creating room...");
        try {
            const response = await fetch("https://fcgbusobfdwnpoqyuzoe.supabase.co/functions/v1/create-daily-room", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    agent_id: "agent_7b0776ef6b855de5"
                })
            });
            const data = await response.json();
            
            if (data.room_url && data.token) {
                dailyCallObject = DailyIframe.createCallObject({ lang: "en-us" });
                window.dailyCallObject = dailyCallObject;
                
                // Create hidden container if not exists
                let container = document.getElementById("daily-container");
                if (!container) {
                    container = document.createElement("div");
                    container.id = "daily-container";
                    container.style.display = "none";
                    document.body.appendChild(container);
                }
                
                if (dailyCallObject.iframe()) { 
                    container.appendChild(dailyCallObject.iframe()); 
                }
                
                await dailyCallObject.join({ url: data.room_url, token: data.token });
                console.log("✅ Joined Daily room (Server Connection Active)");
                
                // ===== 🎧 CLEAN AUDIO LISTENER =====
                dailyCallObject.on("app-message", (ev) => {

                    // ===== USER TRANSCRIPTION =====
                    if (ev?.data?.type === "user_transcription") {
                        const userText = ev.data.transcription || ev.data.text || "";
                        // Route to controller if pre-qual active OR calc mode active
                        if (window.preQualController && (window.preQualController.isActive || window._calcModeActive)) {
                            console.log("👤 [DAILY] User said (captured):", userText);
                            window.preQualController.handleUserInput(userText);
                        } else {
                            console.log("👤 [DAILY] User said (ignored):", userText);
                        }
                        return;
                    }

                    if (ev?.data?.type === "agent_transcription") {
                        const tessText = ev.data.transcription;
                        const lowerText = tessText.toLowerCase();

                        // ===== CAPTURE "I HEARD X" FROM TESS (no longer requires "Is that correct" — KB wording varies) =====
                        var heardMatch = tessText.match(/I heard\s+["']?(.+?)["']?[.?!]/i);
                        if (heardMatch && heardMatch[1]) {
                            var heardValue = heardMatch[1].trim();
                            var skipWords = ["yes","no","that","it","okay","ok","sure","right","correct","you said"];
                            var isSkip = skipWords.some(function(w){ return heardValue.toLowerCase() === w || heardValue.toLowerCase().startsWith(w+" "); });
                            if (!isSkip && heardValue.length > 3) {
                                if (heardValue.indexOf("@") !== -1 || heardValue.indexOf(" at ") !== -1 || heardValue.indexOf("gmail") !== -1 || heardValue.indexOf("dot com") !== -1) {
                                    window._tessHeardEmail = heardValue;
                                    console.log("📧 Captured email from Tess:", heardValue);
                                } else if (window._calcModeActive && window.preQualController) {
                                    // Use currentField, or fall back to _lastCalcField if currentField was cleared
                                    var fieldToPopulate = window.preQualController.currentField || window._lastCalcField;
                                    console.log("🔍 heardMatch fired. field:", fieldToPopulate, "value:", heardValue);
                                    if (!fieldToPopulate) {
                                        window._pendingHeardValue = heardValue;
                                        console.log("⏳ Stored pending heard value:", heardValue);
                                    } else {
                                    // 🏠 POPULATE IMMEDIATELY when Tess repeats the value
                                    console.log("🏠 Populating immediately:", fieldToPopulate, "=", heardValue);
                                    if (typeof window.populateCalcField === "function") {
                                        var populated = window.populateCalcField(fieldToPopulate, heardValue);
                                        if (populated) {
                                            console.log("✅ Field populated:", fieldToPopulate);
                                            if (window.preQualController.answers) {
                                                window.preQualController.answers[fieldToPopulate] = heardValue;
                                            }
                                            window.preQualController.currentField = null;
                                            window.preQualController.pendingValue = null;
                                            // Keep _lastCalcField until next question sets a new one
                                            window._lastPopulatedField = fieldToPopulate;
                                            window._lastCalcField = null;
                                        } else {
                                            console.log("⚠️ populateCalcField returned false — storing as pending");
                                            window.preQualController.pendingValue = heardValue;
                                        }
                                    }
                                    } // end else (currentField is set)
                                } else if (!heardValue.match(/^\d/)) {
                                    window._tessHeardName = heardValue;
                                    console.log("👤 Captured name from Tess:", heardValue);
                                }
                            } else {
                                console.log("🚫 Skipped vague heard value:", heardValue);
                            }
                        }

                        // ===== USER "YES" CONFIRMATION — populate calc field =====
                        // When user says yes after Tess repeats a value, fire population
                        // This is handled via handleUserInput below
                        // Always log Tess transcriptions
                        console.log("🤖 [DAILY] Tess said:", tessText);
                        
                        // Always broadcast to Supabase
                        if (window.supabaseChannel) {
                            window.supabaseChannel.send({
                                type: "broadcast",
                                event: "tess_transcript",
                                payload: { text: tessText, timestamp: Date.now() }
                            });
                        }
                        
                        // ===== INTERVIEW MODE OR CALC MODE: detect field from Tess question =====
                        if (window.preQualController && (window.preQualController.isActive || window._calcModeActive)) {
                            // Detect which question Tess is asking
                            window.preQualController.detectFieldFromQuestion(tessText);
                            
                            // --- SMART SCREEN TRIGGER (during interview) ---
                            var smartImages = window.BotemiaConfig?.modules?.smartScreen?.images || [];
                            var calcOpenI = !!document.getElementById("mortgage-calc-backdrop");
                            for (var si = 0; si < smartImages.length; si++) {
                                if (!calcOpenI && (smartImages[si].triggerMatch || []).some(function(t) { return lowerText.indexOf(t.toLowerCase()) !== -1; })) {
                                    console.log("📸 Smart Screen matched during interview:", smartImages[si].name);
                                    var overlay = document.createElement("div");
                                    overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.65);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:999998;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:20px;";
                                    var imgEl = document.createElement("img");
                                    imgEl.src = smartImages[si].url;
                                    imgEl.style.cssText = "max-width:100%;max-height:70vh;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.5);";
                                    overlay.appendChild(imgEl);
                                    if (smartImages[si].name) {
                                        var caption = document.createElement("div");
                                        caption.style.cssText = "color:white;font-size:1.3rem;margin-top:15px;font-weight:600;";
                                        caption.textContent = smartImages[si].name;
                                        overlay.appendChild(caption);
                                    }
                                    var closeBtn = document.createElement("button");
                                    closeBtn.textContent = "✕ Close";
                                    closeBtn.style.cssText = "margin-top:12px;padding:8px 25px;background:#f8c400;color:#0a0f1e;border:none;border-radius:30px;font-size:0.9rem;font-weight:600;cursor:pointer;";
                                    closeBtn.onclick = function() { overlay.remove(); };
                                    overlay.appendChild(closeBtn);
                                    document.body.appendChild(overlay);
                                    setTimeout(function() { if (overlay.parentNode) overlay.remove(); }, 10000);
                                    if (window.supabaseChannel) {
                                        window.supabaseChannel.send({
                                            type: "broadcast",
                                            event: "smart_screen_trigger",
                                            payload: { image: smartImages[si], trigger: tessText, timestamp: Date.now() }
                                        });
                                    }
                                    if (window.supabaseChannel) {
                                        window.supabaseChannel.send({
                                            type: "broadcast",
                                            event: "smart_screen_trigger",
                                            payload: { image: smartImages[si], trigger: tessText, timestamp: Date.now() }
                                        });
                                    }
                                }
                            }
                            
                            // --- EMAIL TRIGGER (during interview) ---
                            var emailCfg2 = window.BotemiaConfig?.modules?.emailConfig;
                            if (emailCfg2?.emailTriggers?.some(function(t) { return lowerText.indexOf(t.toLowerCase()) !== -1; })) {
                                console.log("📧 Email trigger detected during interview!");
                                if (window.preQualController && window.preQualController.isActive) {
                                    window.preQualController.sendEmail();
                                    window.preQualController.isActive = false;
                                    console.log("✅ Email sent via trigger during interview");
                            
                                    // Show confirmation overlay after email sent
                                    var confirmOverlay = document.createElement("div");
                                    confirmOverlay.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.95);z-index:999998;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:30px 40px;border-radius:16px;border:2px solid #f8c400;";
                                    confirmOverlay.innerHTML = '<div style="color:#f8c400;font-size:1.5rem;margin-bottom:10px;">📧</div><div style="color:white;font-size:1.3rem;font-weight:600;text-align:center;">Email confirmation sent!</div><div style="color:rgba(255,255,255,0.6);font-size:0.9rem;margin-top:8px;">Check your inbox</div>';
                                    confirmOverlay.onclick = function() { confirmOverlay.remove(); };
                                    document.body.appendChild(confirmOverlay);
                                    setTimeout(function() { if (confirmOverlay.parentNode) confirmOverlay.remove(); }, 5000);
                                }
                            }
                            // --- PHONE TRIGGER (during interview) ---
                            if (emailCfg2?.phoneTriggers?.some(function(t) { return lowerText.indexOf(t.toLowerCase()) !== -1; })) {
                                console.log("📞 Phone trigger detected during interview!");
                            }
                            
                            // --- TESTIMONIALS TRIGGER (during interview) ---
                            var tGroups = window.BotemiaConfig?.modules?.testimonial?.groups || [];
                            for (var tg = 0; tg < tGroups.length; tg++) {
                                if (tGroups[tg].triggerPhrase && lowerText.indexOf(tGroups[tg].triggerPhrase.toLowerCase()) !== -1) {
                                    console.log("🎬 Testimonial matched during interview:", tGroups[tg].triggerPhrase);
                                }
                            }
                            
                            // --- VIDEO VAULT TRIGGER (during interview) ---
                            var vids = window.BotemiaConfig?.modules?.videoVault?.videos || [];
                            for (var vi = 0; vi < vids.length; vi++) {
                                if (vids[vi].triggerPhrase && lowerText.indexOf(vids[vi].triggerPhrase.toLowerCase()) !== -1) {
                                    console.log("📹 Video Vault matched during interview:", vids[vi].triggerPhrase);
                                }
                            }
                            
                            // --- WEBSITE INFO TRIGGER (during interview) ---
                            var wTriggers = window.BotemiaConfig?.modules?.websiteInfo?.triggers || [];
                            if (wTriggers.some(function(t) { return lowerText.indexOf(t.toLowerCase()) !== -1; })) {
                                console.log("🌐 Website Info trigger detected during interview!");
                            }

                            // --- MORTGAGE CALCULATOR TRIGGER (during interview/calc mode) ---
                            var calcCfgI = window.BotemiaConfig?.modules?.mortgageCalc;
                            var calcPhrasesI = [calcCfgI?.triggerPhrase || ""];
                            var calcMatchedI = calcCfgI?.enabled && calcPhrasesI.some(function(p){ return p && lowerText.indexOf(p.toLowerCase()) !== -1; });
                            console.log("🔍 Calc trigger check (interview):", lowerText.slice(0,80));
                            if (calcMatchedI) {
                                console.log("🏠 Mortgage Calculator trigger FIRED (interview mode)!");
                                if (typeof window.showMortgageCalculator === "function") { window.showMortgageCalculator(); }
                            }
                            
                            return;
                        }
                        
                        // ===== NORMAL MODE: No interview active =====
                        // If calculator is open, still detect fields from Tess questions
                        if (window._calcModeActive && window.preQualController) {
                            window.preQualController.detectFieldFromQuestion(tessText);
                        }
                        // --- PRE-QUAL TRIGGER ---
                        var triggerPhrase = window.TRIGGER_PHRASE;
                        if (triggerPhrase) {
                            var fuzzyTriggers = [triggerPhrase, triggerPhrase.toLowerCase(), "YES_INITIATE_PREQUAL"].filter(function(t) { return t; });
                            var hasTrigger = fuzzyTriggers.some(function(trigger) { return lowerText.indexOf(trigger.toLowerCase()) !== -1; });
                            if (hasTrigger) {
                                console.log("🎯 TRIGGER DETECTED! Starting pre-qualification...");
                                setTimeout(function() { forcePreQualification(); }, 3500);
                            }
                        }
                        
                        // --- EMAIL TRIGGER (normal mode) ---
                        var emailCfg = window.BotemiaConfig?.modules?.emailConfig;
                        if (emailCfg?.emailTriggers?.some(function(t) { return lowerText.indexOf(t.toLowerCase()) !== -1; })) {
                            console.log("📧 Email trigger detected!");
                            
                            // Populate answers from Tess's "I heard" confirmations
                            if (window.preQualController) {
                                if (!window._tessHeardName) window._tessHeardName = "";
                                if (!window._tessHeardEmail) window._tessHeardEmail = "";
                                
                                // Normalize email: convert "at" → "@", "dot" → ".", remove spaces
                                var prospectEmail = window._tessHeardEmail
                                    .replace(/\s+at\s+/g, "@")
                                    .replace(/\s+dot\s+/g, ".")
                                    .replace(/\s+/g, "")
                                    .replace(/\.+$/g, "");
                                
                                window.preQualController.answers.fullName = window._tessHeardName || "Valued Client";
                                window.preQualController.answers.email = prospectEmail || emailCfg.clientEmail;
                                window.preQualController.answers.phone = "Not provided";
                                window.preQualController.answers.businessName = "Not provided";
                                window.preQualController.answers.scheduledDateTime = "Not provided";
                                window.preQualController.answers.specialRequests = "None";
                                
                                console.log("📧 Sending email to:", prospectEmail || emailCfg.clientEmail);
                                window.preQualController.sendEmail();
                            }
                        }
                        // --- SMART SCREEN TRIGGER (normal mode) ---
                        var smartImages2 = window.BotemiaConfig?.modules?.smartScreen?.images || [];
                        for (var si2 = 0; si2 < smartImages2.length; si2++) {
                            if ((smartImages2[si2].triggerMatch || []).some(function(t) { return lowerText.indexOf(t.toLowerCase()) !== -1; })) {
                                console.log("📸 Smart Screen matched:", smartImages2[si2].name);
                                var overlay = document.createElement("div");
                                overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.65);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:999998;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:20px;";
                                var imgEl = document.createElement("img");
                                imgEl.src = smartImages2[si2].url;
                                imgEl.style.cssText = "max-width:100%;max-height:70vh;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.5);";
                                overlay.appendChild(imgEl);
                                if (smartImages2[si2].name) {
                                    var caption = document.createElement("div");
                                    caption.style.cssText = "color:white;font-size:1.3rem;margin-top:15px;font-weight:600;";
                                    caption.textContent = smartImages2[si2].name;
                                    overlay.appendChild(caption);
                                }
                                var closeBtn = document.createElement("button");
                                closeBtn.textContent = "✕ Close";
                                closeBtn.style.cssText = "margin-top:12px;padding:8px 25px;background:#f8c400;color:#0a0f1e;border:none;border-radius:30px;font-size:0.9rem;font-weight:600;cursor:pointer;";
                                closeBtn.onclick = function() { overlay.remove(); };
                                overlay.appendChild(closeBtn);
                                document.body.appendChild(overlay);
                                setTimeout(function() { if (overlay.parentNode) overlay.remove(); }, 10000);
                                if (window.supabaseChannel) {
                                    window.supabaseChannel.send({
                                        type: "broadcast",
                                        event: "smart_screen_trigger",
                                        payload: { image: smartImages2[si2], trigger: tessText, timestamp: Date.now() }
                                    });
                                }
                                if (window.supabaseChannel) {
                                    window.supabaseChannel.send({
                                        type: "broadcast",
                                        event: "smart_screen_trigger",
                                        payload: { image: smartImages2[si2], trigger: tessText, timestamp: Date.now() }
                                    });
                                }
                                break;
                            }
                        }
                        
                        // --- PHONE TRIGGER (normal mode) ---
                        if (emailCfg?.phoneTriggers?.some(function(t) { return lowerText.indexOf(t.toLowerCase()) !== -1; })) {
                            console.log("📞 Phone trigger detected!");
                            window.open("tel:" + (emailCfg.supportPhone || "949-228-5263"), "_blank");
                        }
                        
                        // --- WEBSITE INFO TRIGGER (normal mode) ---
                        var webInfo = window.BotemiaConfig?.modules?.websiteInfo;
                        if (webInfo?.links && webInfo.links.length > 0) {
                            for (var wi = 0; wi < webInfo.links.length; wi++) {
                                var link = webInfo.links[wi];
                                if (link.triggerPhrase && lowerText.indexOf(link.triggerPhrase.toLowerCase()) !== -1) {
                                    console.log("🌐 Website Info matched:", link.title);
                                    var webOverlay = document.createElement("div");
                                    webOverlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.65);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:999998;display:flex;align-items:center;justify-content:center;";
                                    var webHeader = document.createElement("div");
                                    webHeader.style.cssText = "display:flex;justify-content:space-between;align-items:center;padding:15px 20px;background:rgba(0,0,0,0.5);border-bottom:1px solid #f8c400;";
                                    var webTitle = document.createElement("span");
                                    webTitle.style.cssText = "color:#f8c400;font-size:1.1rem;font-weight:600;";
                                    webTitle.textContent = link.title;
                                    webHeader.appendChild(webTitle);
                                    var webClose = document.createElement("button");
                                    webClose.textContent = "✕";
                                    webClose.style.cssText = "background:#f44336;color:white;border:none;width:32px;height:32px;border-radius:50%;font-size:1rem;cursor:pointer;";
                                    webClose.onclick = function() { webOverlay.remove(); };
                                    webHeader.appendChild(webClose);
                                    webOverlay.appendChild(webHeader);
                                    var webFrame = document.createElement("iframe");
                                    webFrame.src = link.url;
                                    webFrame.style.cssText = "width:800px;max-width:90vw;height:75vh;border:none;";
                                    webOverlay.appendChild(webFrame);
                                    document.body.appendChild(webOverlay);
                                    break;
                                }
                            }
                        }
                        // --- TESTIMONIALS TRIGGER (normal mode) ---
                        var testimonialGroups = window.BotemiaConfig?.modules?.testimonial?.groups || [];
                        for (var tg = 0; tg < testimonialGroups.length; tg++) {
                            if (testimonialGroups[tg].triggerPhrase && lowerText.indexOf(testimonialGroups[tg].triggerPhrase.toLowerCase()) !== -1) {
                                console.log("🎬 Testimonial matched:", testimonialGroups[tg].triggerPhrase);
                                if (testimonialGroups[tg].videos && testimonialGroups[tg].videos.length > 0) {
                                    var tVideoUrl = testimonialGroups[tg].videos[0];
                                    var tOverlay = document.createElement("div");
                                    tOverlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.75);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:999999;display:flex;align-items:center;justify-content:center;flex-direction:column;";
                                    tOverlay.onclick = function() { tOverlay.remove(); };
                                    var tVideo = document.createElement("video");
                                    tVideo.src = tVideoUrl;
                                    tVideo.controls = true;
                                    tVideo.autoplay = true;
                                    tVideo.style.cssText = "max-width:90%;max-height:80vh;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,0.5);";
                                    tOverlay.appendChild(tVideo);
                                   setTimeout(function() { document.body.appendChild(tOverlay); }, 5000);
                                }
                                break;
                            }
                        }
                        
                        // --- VIDEO VAULT TRIGGER (normal mode) ---
                        var videoVault = window.BotemiaConfig?.modules?.videoVault?.videos || [];
                        for (var vi = 0; vi < videoVault.length; vi++) {
                            if (videoVault[vi].triggerPhrase && lowerText.indexOf(videoVault[vi].triggerPhrase.toLowerCase()) !== -1) {
                                console.log("📹 Video Vault matched:", videoVault[vi].triggerPhrase);
                                var vOverlay = document.createElement("div");
                                vOverlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.75);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:999999;display:flex;align-items:center;justify-content:center;flex-direction:column;";
                                vOverlay.onclick = function() { vOverlay.remove(); };
                                var vVideo = document.createElement("video");
                                vVideo.src = videoVault[vi].url;
                                vVideo.controls = true;
                                vVideo.autoplay = true;
                                vVideo.style.cssText = "max-width:90%;max-height:80vh;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,0.5);";
                                vOverlay.appendChild(vVideo);
                                setTimeout(function() { document.body.appendChild(vOverlay); }, 5000);
                                break;
                            }
                        }

                        // --- MORTGAGE CALCULATOR TRIGGER (normal mode) ---
                        var calcCfgN = window.BotemiaConfig?.modules?.mortgageCalc;
                        var calcPhrasesN = [calcCfgN?.triggerPhrase || ""];
                        var calcMatchedN = calcCfgN?.enabled && calcPhrasesN.some(function(p){ return p && lowerText.indexOf(p.toLowerCase()) !== -1; });
                        console.log("🔍 Normal mode calc check:", lowerText.slice(0,80));
                        if (calcMatchedN) {
                            console.log("🏠 Mortgage Calculator trigger FIRED (normal mode)!");
                            if (typeof window.showMortgageCalculator === "function") { window.showMortgageCalculator(); }
                            // Tess sometimes bundles the trigger phrase AND the first question into one message
                            // (e.g. "...launching the calculator now. First, what is your annual income?").
                            // Register that field immediately so it isn't silently skipped.
                            if (window.preQualController && typeof window.preQualController.detectFieldFromQuestion === "function") {
                                window.preQualController.detectFieldFromQuestion(tessText);
                            }
                        }
                    }
                });
            } else {
                console.warn("⚠️ Daily API did not return room_url");
            }
        } catch(e) { 
            console.error("❌ Daily init error:", e); 
        }
    }

    // ==========================================
    // 🍋 UNIVERSAL LISTENER (For PostMessages)
    // ==========================================
    function setupUniversalListener() {
        console.log("👂 Universal Listener Activated (Universal Mode).");
        
        window.addEventListener("message", (event) => {
            if (event.data && event.data.what === "iframe-call-message") return;
            if (!event.data || !event.data.type) return;
            console.log("📩 [INCOMING] Type:", event.data?.type, "Command:", event.data?.command);
            
            // Handle TEST_PING from Communication Monitor
            if (event.data.type === "TEST_PING") {
                console.log("📡 TEST_PING received, sending PONG...");
                if (window.supabaseChannel) {
                    window.supabaseChannel.send({
                        type: "broadcast",
                        event: "test_pong",
                        payload: {
                            clientId: window.BotemiaConfig?.id || "unknown",
                            timestamp: Date.now(),
                            echoTimestamp: event.data.timestamp
                        }
                    });
                }
                return;
            }
            
            // Handle START_PRE_QUAL
            if (event.data.type === "START_PRE_QUAL" || event.data.command === "START_PRE_QUAL") {
                console.log("🎯 START_PRE_QUAL received!");
                if (window.preQualController && !window.preQualController.isActive) {
                    forcePreQualification();
                }
                return;
            }
            
            // Handle transcript for interview answers
            if ((event.data.type === "transcript" || event.data.type === "ai_response") && event.data.text) {
                if (window.preQualController && window.preQualController.isActive) {
                    window.preQualController.handleUserInput(event.data.text);
                }
            }
        });
    }

    // ==========================================
    // ✅ GLOBAL EXPORTS (CRITICAL FOR DASHBOARD TESTS)
    // ==========================================
    window.initDaily = initDaily;
    window.loadDailySDK = loadDailySDK;
    
    // Initialize listener immediately
    setupUniversalListener();

    function createMainWidget() {
        const widget = document.createElement('lemon-slice-widget');
        widget.setAttribute('agent-id', 'agent_7b0776ef6b855de5');
        let clientId = window.BotemiaConfig?.id;
        if (!clientId) { console.error("❌ CRITICAL: BotemiaConfig ID missing!"); return null; }
        widget.setAttribute('client-id', clientId);
        widget.clientId = clientId;
        const apiKey = "sk_lemon_Tleyq2zh6NoMpllEHf7mYNRxzIED6YcP";
        widget.setAttribute('api-key', apiKey);
        widget.apiKey = apiKey;
        let sessionId = window.tessSessionId || 'session-' + crypto.randomUUID();
        widget.setAttribute('room-id', sessionId);
        widget.roomId = sessionId;
        widget.setAttribute('initial-state', 'minimized');
        widget.setAttribute('custom-minimized-width', '144');
        widget.setAttribute('custom-minimized-height', '216');
        widget.setAttribute('custom-active-width', '180');
        widget.setAttribute('custom-active-height', '270');
        widget.setAttribute('show-minimize-button', 'true');
        widget.id = 'main-widget';
        widget.style.display = 'none';
        return widget;
    }

    function forcePreQualification() {
        console.trace("🔍 [TRACE] forcePreQualification called from:");
        console.log("🚀 forcePreQualification - Activating Listener Mode");
        
        if (isPreQualificationActive) {
            console.log("⚠️ Pre-qualification already active, skipping");
            return;
        }
        
        if (!window.preQualController) {
            console.error("❌ preQualController not found");
            return;
        }
        
        // Activate listener mode
        window.preQualController.isActive = true;
        window.preQualController.answers = {};
        
        // Send trigger to LemonSlice
        if (window.mainWidget && typeof window.mainWidget.sendMessage === "function") {
            window.mainWidget.sendMessage("START_INTERVIEW_NOW");
        trackEvent('prequal_start');
            console.log("📤 Sent START_INTERVIEW_NOW to LemonSlice");
        }
        
        isPreQualificationActive = true;
        console.log("✅ Listener Mode activated");
    }
    window.forcePreQualification = forcePreQualification;

    function showSplash() {
        const config = window.BotemiaConfig.modules?.splashScreen;
        if (!config || !config.enabled) {
            // Splash disabled — activate Tess directly
            console.log("✅ Splash disabled — activating Tess directly");
            activateTess();
            return;
        }

        const overlay = document.createElement('div');
        overlay.className = 'splash-overlay';
        overlay.id = 'splashOverlay';
        overlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            z-index: 99999;
        `;

        trackEvent('splash_view');
        const page = document.createElement('div');
        page.className = 'splash-page';

        let logoHTML = '';
        if (config.branding?.logo || config.branding?.name) {
            logoHTML = `
            <div class="splash-logo-bar">
                ${config.branding?.logo ? '<img src="' + config.branding.logo + '" alt="' + (config.branding?.name || 'Client Logo') + '">' : '<span style="color:#333;font-size:20px;font-weight:600;">' + (config.branding?.name || '') + '</span>'}
            </div>
            <div class="splash-presents">${config.presentsText || 'Presents:'}</div>
            `;
        }

        let pageHTML = logoHTML + `
            <div class="splash-navy">
                <h1><span class="sparkle">✨</span>${config.title || 'Tess'}</h1>
                <h2>${config.subtitle || 'Your Friendly AI Web Assistant'}</h2>
                <div class="splash-avatar-container" id="splashAvatarContainer"></div>
                <div class="splash-service-line">${config.serviceLine || 'Offering 24/7 Customer Service!'}</div>
            </div>
        `;

        page.innerHTML = pageHTML;
        overlay.appendChild(page);
        document.body.appendChild(overlay);

        const navySection = page.querySelector('.splash-navy');
        const container = document.getElementById('splashAvatarContainer');
        const splashWidget = createSplashWidget();
        container.appendChild(splashWidget);

        // Add ticker tape if keywords exist
        const tickerKeywords = config.tickerKeywords;
        if (tickerKeywords) {
            const keywords = tickerKeywords.split(',').map(k => k.trim()).filter(k => k);

            if (keywords.length > 0) {
                const tickerContainer = document.createElement('div');
                tickerContainer.className = 'ticker-container';

                const tickerContent = document.createElement('div');
                tickerContent.className = 'ticker-content';

                const allKeywords = [...keywords, ...keywords];

                allKeywords.forEach(keyword => {
                    const span = document.createElement('span');
                    span.className = 'ticker-item';
                    span.innerHTML = `<i class="fas fa-star"></i> ${keyword}`;
                    tickerContent.appendChild(span);
                });

                tickerContainer.appendChild(tickerContent);
                navySection.appendChild(tickerContainer);
            }
        }

        // Add button group after the ticker
        const buttonGroup = document.createElement('div');
        buttonGroup.className = 'button-group';
        buttonGroup.innerHTML = `
            <button class="primary-btn" id="activateTessBtn" style="background: linear-gradient(145deg, ${config.primaryButton?.gradientTop || '#f8c400'}, ${config.primaryButton?.gradientBottom || '#d4a000'}); color: ${config.primaryButton?.textColor || '#0a0f1e'};">${config.primaryButton?.text || 'Get AI help with Tess'}</button>
            <button class="secondary-btn" id="justBrowsingBtn" style="background: linear-gradient(145deg, ${config.secondaryButton?.gradientTop || '#3a4050'}, ${config.secondaryButton?.gradientBottom || '#2a2f3f'}); color: ${config.secondaryButton?.textColor || '#ffffff'};">${config.secondaryButton?.text || 'Just Browsing'}</button>
        `;
        navySection.appendChild(buttonGroup);

        document.getElementById('activateTessBtn').addEventListener('click', activateTess);
        document.getElementById('justBrowsingBtn').addEventListener('click', justBrowsing);

        const primaryBtn = document.getElementById('activateTessBtn');
        primaryBtn.onmouseover = () => { primaryBtn.style.background = `linear-gradient(145deg, ${config.primaryButton?.hoverTop || '#ffd700'}, ${config.primaryButton?.hoverBottom || '#e0b000'})`; primaryBtn.style.transform = 'scale(1.02)'; };
        primaryBtn.onmouseout = () => { primaryBtn.style.background = `linear-gradient(145deg, ${config.primaryButton?.gradientTop || '#f8c400'}, ${config.primaryButton?.gradientBottom || '#d4a000'})`; primaryBtn.style.transform = 'scale(1)'; };
        const secondaryBtn = document.getElementById('justBrowsingBtn');
        secondaryBtn.onmouseover = () => { secondaryBtn.style.background = `linear-gradient(145deg, ${config.secondaryButton?.hoverTop || '#4a5060'}, ${config.secondaryButton?.hoverBottom || '#3a4050'})`; secondaryBtn.style.transform = 'scale(1.02)'; };
        secondaryBtn.onmouseout = () => { secondaryBtn.style.background = `linear-gradient(145deg, ${config.secondaryButton?.gradientTop || '#3a4050'}, ${config.secondaryButton?.gradientBottom || '#2a2f3f'})`; secondaryBtn.style.transform = 'scale(1)'; };
    }

    async function activateTess() {
        console.log("🖱️ Click detected: Capturing user gesture for audio...");

        // Request mic permission IMMEDIATELY on click — tied directly to the user gesture,
        // not deferred behind setup delays. Once granted here, later micOn() calls reuse
        // this permission without prompting again.
        try {
            const earlyStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            earlyStream.getTracks().forEach(track => track.stop());
            console.log("🎤 Mic permission granted immediately on click");
        } catch (e) {
            console.warn("⚠️ Mic permission request on click failed or was denied:", e);
        }

        const splashWidget = document.getElementById('splash-widget');
        if (splashWidget) {
            splashWidget.innerHTML = '';
            if (splashWidget.parentNode) splashWidget.parentNode.removeChild(splashWidget);
        }
        
        const overlay = document.getElementById('splashOverlay');
        if (overlay) overlay.remove();

        setTimeout(() => {
            let outer = document.getElementById('main-widget-outer');
            if (!window.mainWidget || !document.body.contains(window.mainWidget)) {
                window.mainWidget = createMainWidget();
                window.mainWidget.setAttribute('hide-ui', 'true');
                if (!outer) {
                    outer = document.createElement('div');
                    outer.id = 'main-widget-outer';
                    document.body.appendChild(outer);
                }
                outer.innerHTML = '';

                const wrap = document.createElement('div');
                wrap.id = 'main-widget-circle-wrap';
                wrap.appendChild(window.mainWidget);
                outer.appendChild(wrap);

                // Custom close button — lives OUTSIDE the circular crop mask so it
                // isn't clipped by the circle's overflow:hidden.
                const closeBtn = document.createElement('div');
                closeBtn.id = 'main-widget-close-btn';
                closeBtn.innerHTML = '✕';
                closeBtn.onclick = function(e) {
                    e.stopPropagation();
                    if (window.mainWidget) {
                        window.mainWidget.setAttribute("controlled-widget-state", "hidden");
                        window.mainWidget.micOff?.();
                        window.mainWidget.mute?.();
                    }
                    outer.style.display = 'none';
                    console.log("⏹️ Tess hidden via close button");
                };
                outer.appendChild(closeBtn);
            }
            if (outer) outer.style.display = 'block';
            window.mainWidget.style.display = 'block';
            window.mainWidget.setAttribute('controlled-widget-state', 'active');
            
            setTimeout(async () => {
                console.log("🎤 Finalizing audio state...");
                try {
                    if (window.mainWidget) {
                        // Start the room first, then send greeting
                        await window.mainWidget.micOn?.();
                        await new Promise(resolve => setTimeout(resolve, 2000));
                        if (typeof window.mainWidget.sendMessage === 'function') {
                            var prospectName = localStorage.getItem("prospectName") || "";
                            var greeting = prospectName ? "Hi " + prospectName + ", I'm Tess from AdSpend Audit Group. Thanks for checking out your free PPC audit report." : "Hi, I'm Tess from AdSpend Audit Group. Thanks for checking out your free PPC audit report.";
                            await window.mainWidget.sendMessage(greeting);
                            console.log("✅ Tess primed with greeting");
                        }
                            // Keyboard shortcut: Ctrl+X to stop Tess
                            document.addEventListener("keydown", function(e) {
                                if (e.ctrlKey && !e.shiftKey && (e.key === "x" || e.key === "X")) {
                                    e.preventDefault();
                                    if (window.mainWidget) {
                                        window.mainWidget.setAttribute("controlled-widget-state", "hidden");
                                        window.mainWidget.micOff?.();
                                        window.mainWidget.mute?.();
                                        window.mainWidget.style.display = "none";
                                    }
                                    var outerEl = document.getElementById('main-widget-outer');
                                    if (outerEl) outerEl.style.display = "none";
                                    console.log("⏹️ Tess hidden via Ctrl+X");
                                }
                            });
                        await window.mainWidget.unmute?.();
                    }
                } catch(e) {
                    console.error("❌ Mic activation failed:", e);
                }
                
                // Nuclear Shadow DOM unmute
                try {
                    var shadow = window.mainWidget.shadowRoot;
                    if (shadow) {
                        var vs = shadow.querySelectorAll("video");
                        var as = shadow.querySelectorAll("audio");
                        vs.forEach(function(v) { v.muted = false; v.volume = 1.0; });
                        as.forEach(function(a) { a.muted = false; a.volume = 1.0; });
                        console.log("🔊 Force unmuted", vs.length, "video and", as.length, "audio elements");
                    }
                    console.log("🔊 Tess force unmuted via Shadow DOM");
                } catch(e) { console.warn("Shadow unmute error:", e); }
            }, 3000);
        }, 100);
        
        if (typeof initDaily === "function") { initDaily(); }
        window.activateTess = activateTess;
    }
        trackEvent('activate_tess');

    function showPersistentAvatar() {
        const config = window.BotemiaConfig.modules?.splashScreen;
        const persistentConfig = config?.persistentButton || {};
        const position = persistentConfig.position || 'bottom-left';
        
        const existingBtn = document.getElementById('persistent-avatar-btn');
        if (existingBtn) existingBtn.remove();
        
        const avatarBtn = document.createElement('div');
        avatarBtn.id = 'persistent-avatar-btn';
        let positionStyles = '';
        
        if(position === 'bottom-left') positionStyles = 'bottom: 20px; left: 20px;';
        else if(position === 'bottom-right') positionStyles = 'bottom: 20px; right: 20px;';
        else if(position === 'middle-left') positionStyles = 'top: 50%; left: 20px; transform: translateY(-50%);';
        else if(position === 'middle-right') positionStyles = 'top: 50%; right: 20px; transform: translateY(-50%);';
        
        avatarBtn.style.cssText = `position: fixed !important; ${positionStyles.replace(/;/g, ' !important;')} width: 180px !important; height: 180px !important; border-radius: 50% !important; background: linear-gradient(135deg, ${persistentConfig.gradientTop || '#f8c400'} 0%, ${persistentConfig.gradientBottom || '#d4a000'} 100%) !important; cursor: pointer !important; z-index: 999999 !important; box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important; display: flex !important; align-items: center !important; justify-content: center !important; overflow: hidden !important; transition: transform 0.3s ease !important;`;
        
        const tessVideoUrl = config?.tessVideoUrl;
        if (tessVideoUrl) {
            const video = document.createElement('video');
            video.src = tessVideoUrl;
            video.autoplay = true; video.loop = true; video.muted = true; video.playsInline = true;
            const videoFit = config?.tessVideoFit || 'cover';
            video.style.cssText = `width: 180px; height: 180px; object-fit: ${videoFit}; border: none; pointer-events: none;`;
            avatarBtn.appendChild(video);
            
            const textOverlay = document.createElement('div');
            textOverlay.style.cssText = `position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); color: #f8c400; text-align: center; padding: 15px 5px 8px 5px; font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 4px; pointer-events: none;`;
            textOverlay.innerHTML = `Ask Tess <span style="font-size: 20px;">👆</span>`;
            avatarBtn.appendChild(textOverlay);
        } else {
            const tessImage = config?.tessImage;
            if (tessImage) { avatarBtn.innerHTML = `<img src="${tessImage}" style="width: 170px; height: 170px; border-radius: 50%; object-fit: cover; border: 3px solid white;">`; }
            else { avatarBtn.innerHTML = `<i class="fas fa-user-circle" style="font-size: 140px; color: white;"></i>`; }
        }
        
        avatarBtn.addEventListener('mouseenter', () => { avatarBtn.style.transform = 'scale(1.1)'; });
        avatarBtn.addEventListener('mouseleave', () => { avatarBtn.style.transform = 'scale(1)'; });
        avatarBtn.addEventListener('click', () => { avatarBtn.remove(); activateTess(); });
        document.body.appendChild(avatarBtn);
    }

    function justBrowsing() {
        console.log("👆 Just Browsing clicked - showing persistent avatar");
        const overlay = document.getElementById('splashOverlay');
        if (overlay) overlay.remove();
        const splashWidget = document.getElementById('splash-widget');
        if (splashWidget) splashWidget.remove();
        
        const config = window.BotemiaConfig.modules?.splashScreen;
        if (config?.persistentButton?.enabled) {
            showPersistentAvatar();
        trackEvent('just_browsing');
        } else {
            if (!window.mainWidget || !document.body.contains(window.mainWidget)) { window.mainWidget = createMainWidget(); document.body.appendChild(window.mainWidget); }
            window.mainWidget.style.display = 'block';
        }
    }

    window.disableBridgeTriggers = false;
    function initWidget() {
        if (document.querySelector('lemon-slice-widget')) { console.log('✅ Widget already exists'); return; }
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@lemonsliceai/lemon-slice-widget';
        script.type = 'module';
        script.onload = () => { console.log('✅ Widget script loaded'); }; 
        script.onerror = () => console.error('❌ Failed to load widget');
        document.head.appendChild(script);
        setTimeout(() => { showSplash(); }, 100);
    }
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initWidget); }
    else { initWidget(); }
    console.log('✅ Botemia Bridge v5.8 loaded for', window.BotemiaConfig.name);

    // ===== CLIENT ANNOUNCEMENT FUNCTION =====
    function announceToTCS() {
        const sendAnnouncement = function() {
            if (window.supabaseChannel) {
                window.supabaseChannel.send({
                    type: 'broadcast',
                    event: 'client_info',
                    payload: {
                        type: 'CLIENT_INFO',
                        clientId: window.BotemiaConfig.id,
                        url: window.location.href,
                        timestamp: Date.now()
                    }
                });
                console.log('📢 Announced to TCS via Supabase Realtime');
                return true;
            }
            return false;
        };

        if (sendAnnouncement()) return;
        
        console.log('⏳ Supabase channel not ready, retrying...');
        let attempts = 0;
        const interval = setInterval(function() {
            attempts++;
            if (sendAnnouncement() || attempts >= 6) {
                clearInterval(interval);
            }
        }, 500);
    }

    setTimeout(announceToTCS, 4000);
    // ===== HEALTH CHECK FOR TCS DASHBOARD =====
    window.bridgeHealthCheck = function() {
        return {
            status: "active",
            mode: "listener",
            clientId: window.BotemiaConfig?.id,
            readyForHandoff: !!window.mainWidget,
            dailyConnected: !!window.dailyCallObject,
            timestamp: Date.now()
        };
    };
    console.log("🩺 Bridge health check available: window.bridgeHealthCheck()");
})();
