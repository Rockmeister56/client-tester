// Botemia Bridge for Mortgage Assist Demo
// Generated: 3/17/2026, 11:59:34 PM
// Client ID: mortgage-assist-demo
// Version: 5.4 - BATON PASS FIX

(function() {
    "use strict";

    // ===== EMBEDDED CLIENT CONFIGURATION =====
    window.BotemiaConfig = {
    "id": "mortgage-assist-demo",
    "name": "Mortgage Assist Demo",
    "agentId": "agent_7b0776ef6b855de5",
    "widgetId": "",
    "apiKey": "",
    "environment": "production",
    "industry": "mortgage",
    "modules": {
        "splashScreen": {
            "enabled": true,
            "agentId": "agent_7b0776ef6b855de5",
            "title": "Meet Tess",
            "subtitle": "Your Personal AI Web Guide",
            "tessVideoUrl": "https://fcgbusobfdwnpoqyuzoe.supabase.co/storage/v1/object/sign/processed-videos/tess-button.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjJjNGVkZS0wYzRiLTQyMzAtOGE5MC1jMDhmNjhlNDVkNTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9jZXNzZWQtdmlkZW9zL3Rlc3MtYnV0dG9uLm1wNCIsImlhdCI6MTc3MzgwNDA4MSwiZXhwIjoxODA1MzQwMDgxfQ.07K0XCnTt3zAZPp2ZAgZ-SzYhZj6nW1Vun8WW-zDAVQ",
            "tessVideoFit": "cover",
            "tickerKeywords": "Mortgage Rates, Pre-Qualification, First-Time Buyer, Refinance, FHA Loans",
            "gradientCenter": "#1e4a8a",
            "gradientOuter": "#0a1a2f",
            "primaryButton": {
                "text": "Get AI help with Tess",
                "gradientTop": "#f8c400",
                "gradientBottom": "#d4a000",
                "hoverTop": "#ffd700",
                "hoverBottom": "#e0b000",
                "textColor": "#0a0f1e"
            },
            "secondaryButton": {
                "text": "Just Browsing",
                "gradientTop": "#3a4050",
                "gradientBottom": "#2a2f3f",
                "hoverTop": "#4a5060",
                "hoverBottom": "#3a4050",
                "textColor": "#ffffff"
            },
            "persistentButton": {
                "enabled": true,
                "position": "middle-right",
                "action": "activate-tess",
                "gradientTop": "#f8c400",
                "gradientBottom": "#d4a000"
            },
            "branding": {
                "name": "",
                "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVYAAAAnCAYAAABUpmBTAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAPYQAAD2EBqD+naQAADpNJREFUeF7tnQmQVMUZx40mWmrUsioxpsrEijGmKpVUtFKKisoRNSYVjIAiCsYDOZabcAu4nItyyyXgigRQOSUKqCjgAi6HXMUlLPfpwgossLvsNbv/9DdvGr5tuvu9uXbZtX9VXznv+/+7Z3yO/+p5r2f2CjgcVUhxcXHkkcNRc3DB6qhSysvLI48cjppDlQUr/Q8ly+FwOGoSVRKsB47kYPz0z5E6Zg6OZp9CmQtXh8NRg0h4sBYVl6DvyA/RLW06ug2dgT7i8dZdh8JacUkpVn7zLboM+S8atHwDf31hIDoPmoaFyze6lavD4agxJDRYKRvPFxbh8RcHofYzffFQk354/KXByFi3A9/lnMashZlo0ett1H2+P2o36YsHheeRpql4oes4jJm2GDmnziJUVhaZzeFwOKonSQnWx0SwUmhSPfHyEIx45xMMF9Wkw+gLgcqrtghgGtN/7Fxs2nEAhUUlkRkdDoej+pH0YK3XbACeajNMrGIHVwjTOmLV+sTLaRV6VF2HzsDsxatx/Pszib32SnOFRGAX5UcaDofDkRySHqxUfJX6cNPX8VzntzAifSHefv8LtHxtMh54+qJO1TBlOCbM/By79h8LX7ONm1ApcO4EkL0TKDwXaTocDkdySHCwlqNAE6yy/vbSYLRLTcdHS9YhL78Q+QWFyFi7A13TpqPu86nhSwLko3/SddgBY+di1YadOHUmL/IMMVAkxh7PAvasAg5t8NLf4XA4kkjCgrWsrBxnzhVg+ZrtqN98QIVAfeDpPniqzXAMnjAf67fuDXsldLPqeE4u+o76UKxUR4RXtHxsi96TMGtRJg5/dzIc3IEhb+5RIGsFsHkBsDfTharD4agUEhKsJSWlOHg0J7wSvb9xnwrBWOe5VDzdfhSmL1iBEyfPREZcCoXmtPkZeLnnRNRt1v/CeFq9PvrvQRg6aQH2HT6B84UBvgIZEp6cfcDyCcDioWKlutEaqvz1yrIRrT+ZVOVzVxfU/1aX0zlL1mtKxHz8tanlsBNXsFIYUtBt2XkQ/UbPQq3Gr1U4+Y+JQKRrqOu27EUo5L+NiubbvvswOg6cGt6m9dCzF1evtHUrpV86MjfuCq+MjdA11APrgeltgdndgWPbfFeq/DXLshGtP1lU5XNXJ/h/p8vtnCXjNcU7H39NfuXQE3Ow0sf5s3nn8dmKzfjnq29UONl0M4ouB4yaugiHs6P7CC/Dmva10m6Ch1m4UjVo+SYmzlyCc/mFl+4aKDwLrHwHGFwLmCNCNWevb6gSfH5eOnQ+qsqmKp+7usHP1eV2zhL9muKdj48PWo5LiSlYKfxoO9QEEXD3Nepd4STTR/e7G/TA5m8PoLi4NEiuaaHnoBtb9IUCukZ7cX5vZ0HzruOQf74o4hbQE41vCLS9HvhiJJB/kpqe5gN//bx06HxUlU1VPnd1Qj1P6nFNI55/Pz7WNkdQ3w+ZqIO1NBTCstXb0LrvlPBeVH5yH2qailZ9JuNI9imUlIYqhiodUNid2CNqN3D6MHA+13tMPTour3i5gK7d0m8JDJvycfhaLX8uCtemHUcjP78A5Qc3AP3vEaF6I5AxCcjLuWQuG3xefqxD5zN5JdwXrV89tpUOk0fXU+EeXjZMXl1PhXv8vEFR51KPbXAvLxs6P5UJPw/XeanoPLKCEu0Ym1edSz1W4brNJ/Hz2XRV48e8Hw+Bg5VWkKdy8zDlwy/RuN3ICqH6wDP9UO/ZPpjdvTmOn8ytcNf/ArQ5/7PhQI87gO53AuOaAF+/B3QTx71+J46fBIov3bxP12a/O3EaI9MXolYj7xpu/eYD0XHQe8jamYWyeb3E+N+KUL0J+Opt4OzxCqFKr5vKhvz3oNIdS9S+eqzCdVPp0PmClIrOoysVnUctHTqfrnTofLJiRTePrqdD9elKRedRSyWoZiqJTpMVhFjG2FDn48XR6WrpiEfnmq3iIXCwbtq+H/1Gz8Y/WgwN30iST16/SU90atYMW1vdgVOvP4Iy00qRgnVBH6DVVcCrPwaGPAIsGyseXwm0uRpIuw8o0m/ep72xU2Ytxb0Ne6NRygjMmL8MhzasQujNR4GutwAtrgHWfACcEyvVMlopl4d3KWTn5KJUrJz9UE+meixR++oxh2t+paLzBCmOTjeViknjfT/NVio6j1qxYBpv6ktsukkz9YlYNFOf0Gm8p1YQovX7wedTS6LTTKVi0wibzjW/ihXfYKXF3qcZm9H/rbnhH0uhYGvUVlTKcLRv2QlzX7wXWS1uRVnKNShJrWUP1kVDgc63AZ1+BYx6CljxDtBRHP/ndnH8hLeZXwMF69S5y9Gm3xSszMjE90vEuLTaQMq1YqV6M7B+PnD+rPdiBaFQCMfEKpd+TSsIuhOpO7Emj+ojuKbqNo3w04l4dK6puqkvMemmPsE1VQ+qxYJpvKkviUXX9TgmPdq+xKSb+n7EOs4En880p81j0wibRth0rvnpsRJoxbr7QDbWbt6NrzfsErXTq7VbsGXaEOS2uF6sQq9AuVh12oNVhNxXk4HBYqU6qA4wtS3wzRzxWByn1QPebQEU67dR0bXWXXsOYeOnH6FoZheUD7xHPKdY9dIlgNUzgVK6ieWFKmVrfkERiqL4IRfdiVR76jGh6xG8r2oSm8fU59g8Nk0SxKNDN07XUzF5TH2Jn27Cb5xN55rJoxLLGMLk532dbiJavyTIOO5RS8WmEVyPxWPqS2y6TZME8diI+ubVBSgEl00QH+V/FDBYRdB9PhzoeQfQQwTiuGe8a6x0zbW3+RorJWV5YR5Cmz5BaFxD8dH/VqDNT4DXfg9kzvDmZXf/KVij/XUs3UlUe+oxoesRpr6KyWfqc2wemyYJ4pFwLy+Jrqdi8vC+X0WD3zibzjVd6dD5eJkweXhfVyaCeHQEGcc9aqnYNMJPl5h8pr7Epts0SRCPjfiClb7ZFE2w0jXW1mKl2VIEY1rkGmtLcZxyDTC01qXXWCkls7PE80wEhtcVY8U4CtV+fwBWiVAOh2pFymL4PVfdSVR76jGh6xGmvorJZ+pzbB6bJvHzcN1UEl1PxeThfb8Kim6sX6noPGqp6DxqqQTVTKVi02wEGcc9aqnYNMJPl5h8pr7Epts0SRCPjSiCVYQcXQMtKfQONcFanHq/OVjLQsDa94GJjYEJouaJkN26yHs8Saxe5/UQc5+PmMVz0cf7rAxgVmexOhUr2pbiedpdBwy5D/hqUsRXEVq3xvJD2aaTyHs2PWhfxeQz9Tk2j02T2DxcUz1Beyomj6kfD3zOoGVD55dlQueVxTH1VbhPLY6p7wcfF3SszW/TCD9dYvKZ+hKbbtMkQTw2ogtW+lGTPZkXfn4vtPJdlLS5eI3VGqw0nrZC0VdMj271vhWVd9J7fGx75FtSkbHU3/gRMObvQIcbxfwiVDv8FBhWB1gz05tLQ6y/32o6ibzvp3N4X9UkNo+pz7F5bJrE5DH1JTpd11MxeUz9eOBzBq2gxDLONsbUt8HHqONM/SBEO9bmt2kE12PxmPoSm27TJEE8NqIL1vxTQOa08H7U8k0foygjHXnjm6BkwN0oTbnOJ1glFH6iZAiG/8l6R0TQZoiP/vRxv9WV4dBGexHeI+sD6+d4K18NQfarmjCdRN7301W4puo2jbBpEj+PTeeaqpv6EpNu6hNc89NVbJqORPh1PY5O1/U4Jj3avsSkm/pB4GNtcwTx2TQJ96g+m0bYdJtGxKsHIbprrBRcdClgqQi+/vcCU19CydYlOLssHefTHkbh2OcCBKsOmrcAOLgRGP8voOMNXqBSdRCPR9QDNszzfAZiDVXCdBJ5309X4Zpfqdg0CffovDrdVJxEabZS0XnUCkq0Y0x+U58waaY+YdJMfSIWjfd1uh+68UFKxaZJuMevVHQeU6noPKaKleiCVUI3jWibU6+7gC6/BNJfROjbpTi3ZRnKaVtVNNAK9NxxYNunQI/feDenLoSq+Pg/tgEg5vYjGcFKxKoRXDeVDj+d4B6TV+fRlYrOoysVnUdXOnQ+XkGJdozJz/umUtF51FIJqplKJYjHD90cpjIRxENwn6lM6Ly6UtF5dBUPsQUrQb95unG+93XU1lcB7SgExWqTfq2/IFckXYCVa5kIYbq2OqeLd3NKBioVbf6f3BTYv45SMzJATzyhSthOZqwah/ui9dvgPpPX5NH1OFxXfbqehGtc1/VUuMfPqyMZ47hm8qhEMyZaj5+XiMZrQ52Hlx/ReAnuj2ecRNeT6DTe4/1YiT1YJTu+BNr/TISrCEaqV0QNqeXd6AqHqyH0KAwPbIisUkUw81Cl4/RmwJEtZPT8FuIN1h8iiXwTBaGyn8/hMFEZ78X4g5UuC+xaCXS73QvW8GrzavEx/mZgQiPvT6NU+EaVCEH6Tj9t1er0c2+1y0O15ZXAB+29nQe0og2Ay9WK+L1xuG7yRIPfXFw3eRyOyqIy3ovxBytBN7R2fw0MoK+aRu7kU9Hd/O63AeOfBLYu9vap0h/1m9QE6CJClbZR8VClH2T5X6r3M4Kazf+OYPA3jl8lAt28pnI4qprKeD+KNEsQJUXeH+wb+BexYmU3oKgoYPvcBaQ9CKT+CehIe1OZHi6xcl2cBpw8GHil6jDD3zy2ShS6uXXlcFQ1lfF+FImWQOiG1t7VwLC6QNtrleCk1alYkbZmK1pZ7W4APnsDOH3EuE/VET38DaRWMtA9jyyH43KhMt6XItUSDF3wzFopPu4/K1amN10aomp1uQVYMhw4ky3GxrIH1uFwOC4vRLIlAxGu+9aEv0CgvZYaLtHr+Wvv71PRzSyHw+GoISQpWAXh7VTfANNeAbr+wgvSC6F6pXfN9csxQMHpyACHw+GoGSQvWMOIcN2/Fni/LdDjNi9caXvV638Elo41/sUAh8PhqM4kOVgjHN0GzOkG9L4TSP2zt4f1wk8EOhwOR82icoKVVq7f7wOWjAZWvOvtew3wjSqHw+GofgD/B1+Wdgblkt9tAAAAAElFTkSuQmCC"
            }
        },
        "testimonial": {
            "groups": []
        },
        "videoVault": {
            "videos": []
        },
        "smartScreen": {
            "action": "showBestMatch",
            "images": []
        },
        "websiteInfo": {
            "triggers": [],
            "infoType": "navigation",
            "action": "showSmartNavigation"
        }
    },
    "updatedAt": "2026-03-18T06:59:34.841Z"
};

    const style = document.createElement('style');
    style.textContent = `
        .splash-avatar-container {
            width: 220px; height: 384px; margin: 0 auto 25px;
            border-radius: 20px; overflow: hidden;
            background: #000;
            box-shadow: 0 20px 30px rgba(0,0,0,0.5);
            border: 2px solid rgba(255,255,255,0.1);
            display: flex; align-items: center; justify-content: center;
            position: relative;
        }
        .splash-avatar-container lemon-slice-widget {
            position: absolute;
            top: 50%;
            left: 45%;
            transform: translate(-50%, -50%);
            width: 280px !important;
            height: 400px !important;
            max-width: none !important;
            max-height: none !important;
            border-radius: 18px;
        }
        .splash-card {
            background: radial-gradient(circle at center, #1e4a8a 0%, #0a1a2f 80%);
            border-radius: 48px; padding: 20px 30px 40px 30px;
            max-width: 475px; width: 90%; text-align: center;
            box-shadow: 0 30px 60px rgba(0,0,0,0.6);
            animation: slideUp 0.4s ease;
        }
        .splash-card h1 { color: white; font-size: 2.5rem; margin-bottom: 5px; font-weight: 700; }
        .splash-card h2 { color: rgba(255,255,255,0.9); font-size: 1.2rem; margin-bottom: 20px; font-weight: 300; }
        .button-group { display: flex; gap: 10px; justify-content: center; margin-top: 15px; }
        .primary-btn, .secondary-btn { padding: 12px 20px; border-radius: 40px; font-size: 1rem; font-weight: 600; cursor: pointer; flex: 1; max-width: 200px; border: none; transition: all 0.2s; }
        .primary-btn:hover, .secondary-btn:hover { transform: scale(1.02); }
        .ticker-container {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(90deg, rgba(0,0,0,0.9), rgba(248,196,0,0.2), rgba(0,0,0,0.9));
            backdrop-filter: blur(2px);
            color: #f8c400;
            padding: 6px 0;
            overflow: hidden;
            white-space: nowrap;
            font-size: 13px;
            font-weight: 600;
            text-shadow: 0 1px 2px rgba(0,0,0,0.8);
            z-index: 10;
            pointer-events: none;
            border-top: 2px solid #f8c400;
            border-bottom: none;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.5);
        }
        .ticker-content {
            display: inline-block;
            animation: ticker 25s linear infinite;
            padding-left: 100%;
        }
        @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
        .ticker-item {
            display: inline-block;
            padding: 0 25px;
            color: white;
            font-size: 13px;
            font-weight: 500;
            letter-spacing: 0.5px;
        }
        .ticker-item i {
            margin-right: 8px;
            color: #f8c400;
            font-size: 12px;
            filter: drop-shadow(0 0 3px rgba(248,196,0,0.5));
        }
    `;
    document.head.appendChild(style);

    function createSplashWidget() {
        const widget = document.createElement('lemon-slice-widget');
        widget.setAttribute('agent-id', 'agent_7b0776ef6b855de5');
        widget.setAttribute('inline', '');
        widget.setAttribute('custom-minimized-width', '280');
        widget.setAttribute('custom-minimized-height', '400');
        widget.setAttribute('initial-state', 'active');
        widget.setAttribute('hide-ui', '');
        widget.id = 'splash-widget';
        return widget;
    }

    function createMainWidget() {
        const widget = document.createElement('lemon-slice-widget');
        widget.setAttribute('agent-id', 'agent_7b0776ef6b855de5');
        widget.setAttribute('initial-state', 'minimized');
        widget.setAttribute('custom-minimized-width', '144');
        widget.setAttribute('custom-minimized-height', '216');
        widget.id = 'main-widget';
        widget.style.display = 'none';
        return widget;
    }

    function showSplash() {
        const config = window.BotemiaConfig.modules?.splashScreen;
        if (!config || !config.enabled) return;

        const overlay = document.createElement('div');
        overlay.className = 'splash-overlay';
        overlay.id = 'splashOverlay';
        overlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.7); backdrop-filter: blur(4px);
            display: flex; align-items: center; justify-content: center; z-index: 99999;
        `;

        const card = document.createElement('div');
        card.className = 'splash-card';
        card.style.background = `radial-gradient(circle at center, ${config.gradientCenter || '#1e4a8a'} 0%, ${config.gradientOuter || '#0a1a2f'} 80%)`;

        let cardHTML = `
            <h1>✨ ${config.title || 'Meet Tess!'} ✨</h1>
            <h2>${config.subtitle || 'Your Personal AI Web Guide'}</h2>
            <div class="splash-avatar-container" id="splashAvatarContainer"></div>
            <div class="button-group">
                <button class="primary-btn" id="activateTessBtn" style="background: linear-gradient(145deg, ${config.primaryButton?.gradientTop || '#f8c400'}, ${config.primaryButton?.gradientBottom || '#d4a000'}); color: ${config.primaryButton?.textColor || '#0a0f1e'};">${config.primaryButton?.text || 'Get AI help with Tess'}</button>
                <button class="secondary-btn" id="justBrowsingBtn" style="background: linear-gradient(145deg, ${config.secondaryButton?.gradientTop || '#3a4050'}, ${config.secondaryButton?.gradientBottom || '#2a2f3f'}); color: ${config.secondaryButton?.textColor || '#ffffff'};">${config.secondaryButton?.text || 'Just Browsing'}</button>
            </div>
        `;

        // Add white footer area with logo
        cardHTML += `
            <div style="margin-top: 25px; background: white; border-radius: 0 0 48px 48px; padding: 15px 0; width: calc(100% + 60px); margin-left: -30px; margin-right: -30px; margin-bottom: -40px;">
                <div style="display: flex; align-items: center; justify-content: center; gap: 15px; padding: 0 30px;">
                    ${config.branding?.logo ? '<img src="' + config.branding.logo + '" style="height: 36px; width: auto;">' : ''}
                    ${config.branding?.name ? '<span style="color: #333; font-size: 18px; font-weight: 500;">' + config.branding.name + '</span>' : ''}
                </div>
            </div>
        `;
        card.innerHTML = cardHTML;

        overlay.appendChild(card);
        document.body.appendChild(overlay);

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
                
                // Duplicate keywords for seamless looping
                const allKeywords = [...keywords, ...keywords];
                
                allKeywords.forEach(keyword => {
                    const span = document.createElement('span');
                    span.className = 'ticker-item';
                    span.innerHTML = `<i class="fas fa-star"></i> ${keyword}`;
                    tickerContent.appendChild(span);
                });
                
                tickerContainer.appendChild(tickerContent);
                container.appendChild(tickerContainer);
            }
        }
        document.getElementById('activateTessBtn').addEventListener('click', activateTess);
        document.getElementById('justBrowsingBtn').addEventListener('click', justBrowsing);

        const primaryBtn = document.getElementById('activateTessBtn');
        primaryBtn.onmouseover = () => { primaryBtn.style.background = `linear-gradient(145deg, ${config.primaryButton?.hoverTop || '#ffd700'}, ${config.primaryButton?.hoverBottom || '#e0b000'})`; primaryBtn.style.transform = 'scale(1.02)'; };
        primaryBtn.onmouseout = () => { primaryBtn.style.background = `linear-gradient(145deg, ${config.primaryButton?.gradientTop || '#f8c400'}, ${config.primaryButton?.gradientBottom || '#d4a000'})`; primaryBtn.style.transform = 'scale(1)'; };
        const secondaryBtn = document.getElementById('justBrowsingBtn');
        secondaryBtn.onmouseover = () => { secondaryBtn.style.background = `linear-gradient(145deg, ${config.secondaryButton?.hoverTop || '#4a5060'}, ${config.secondaryButton?.hoverBottom || '#3a4050'})`; secondaryBtn.style.transform = 'scale(1.02)'; };
        secondaryBtn.onmouseout = () => { secondaryBtn.style.background = `linear-gradient(145deg, ${config.secondaryButton?.gradientTop || '#3a4050'}, ${config.secondaryButton?.gradientBottom || '#2a2f3f'})`; secondaryBtn.style.transform = 'scale(1)'; };
    }

    async function forceUnmute() {
        if (window.mainWidget) {
            // 1. API Calls
            try {
                await window.mainWidget.micOn?.();
                await window.mainWidget.unmute?.();
            } catch(e) {
                console.warn("Force unmute API error", e);
            }
            // 2. Nuclear Shadow DOM Unmute
            try {
                const shadow = window.mainWidget.shadowRoot;
                if (shadow) {
                    const v = shadow.querySelector('video');
                    const a = shadow.querySelector('audio');
                    if (v) { v.muted = false; v.volume = 1.0; v.play(); }
                    if (a) { a.muted = false; a.volume = 1.0; a.play(); }
                }
            } catch(e) {}
        }
    }

    function activateTess() {
        console.log("🖱️ Click detected: Capturing user gesture for audio...");
        
        // 1. Try to pre-warm audio
        try {
            if (window.mainWidget && typeof window.mainWidget.micOn === "function") {
                window.mainWidget.micOn();
            }
        } catch(e) { console.warn("Audio pre-check:", e); }

        // 2. NUKE THE SPLASH WIDGET
        const splashWidget = document.getElementById('splash-widget');
        if (splashWidget) {
            splashWidget.innerHTML = '';
            if (splashWidget.parentNode) {
                splashWidget.parentNode.removeChild(splashWidget);
            }
        }

        // 3. Remove the overlay
        const overlay = document.getElementById('splashOverlay');
        if (overlay) overlay.remove();

        // 4. CREATE MAIN WIDGET (Fast Transition)
        setTimeout(() => {
            if (!window.mainWidget || !document.body.contains(window.mainWidget)) {
                window.mainWidget = createMainWidget();
                // CRITICAL: Set hide-ui to prevent text messages
                window.mainWidget.setAttribute('hide-ui', 'true');
                document.body.appendChild(window.mainWidget);
            }
            
            window.mainWidget.style.display = 'block';
            window.mainWidget.setAttribute('controlled-widget-state', 'active');
            
            // 5. Turn on mic with proper async handling
            setTimeout(async () => {
                console.log("🎤 Finalizing audio state...");
                try {
                    if (window.mainWidget && typeof window.mainWidget.micOn === 'function') {
                        await window.mainWidget.micOn();
                        await window.mainWidget.unmute?.();
                        console.log("✅ Microphone activated");
                        
                        // Force unmute shadow DOM as backup
                        await forceUnmute();
                        
                        // Send welcome message (audio only due to hide-ui)
                        setTimeout(() => {
                            if (window.mainWidget && typeof window.mainWidget.sendMessage === 'function') {
                                window.mainWidget.sendMessage("Hi! I'm Tess. How can I help you today?");
                            }
                        }, 1000);
                    }
                } catch (e) {
                    console.error("❌ Mic activation failed:", e);
                    // Fallback to forceUnmute
                    forceUnmute();
                }
            }, 800);
        }, 100);
    }

    function showPersistentAvatar() {
        const config = window.BotemiaConfig.modules?.splashScreen;
        const persistentConfig = config?.persistentButton || {};
        
        // Get position from config
        const position = persistentConfig.position || 'bottom-left';
        console.log("📌 Avatar position from config:", position);
        
        // Remove existing avatar button if any
        const existingBtn = document.getElementById('persistent-avatar-btn');
        if (existingBtn) existingBtn.remove();
        
        // Create avatar button
        const avatarBtn = document.createElement('div');
        avatarBtn.id = 'persistent-avatar-btn';
        
        // Apply position based on dropdown selection
        let positionStyles = '';
        
        switch(position) {
            case 'bottom-left':
                positionStyles = 'bottom: 20px; left: 20px;';
                break;
            case 'bottom-right':
                positionStyles = 'bottom: 20px; right: 20px;';
                break;
            case 'middle-left':
                positionStyles = 'top: 50%; left: 20px; transform: translateY(-50%);';
                break;
            case 'middle-right':
                positionStyles = 'top: 50%; right: 20px; transform: translateY(-50%);';
                break;
            default:
                positionStyles = 'bottom: 20px; left: 20px;';
        }
        
        // Style the avatar button - with !important to override page CSS
        avatarBtn.style.cssText = `
            position: fixed !important;
            ${positionStyles.replace(/;/g, ' !important;')}
            width: 180px !important;
            height: 180px !important;
            border-radius: 50% !important;
            background: linear-gradient(135deg, ${persistentConfig.gradientTop || '#f8c400'} 0%, ${persistentConfig.gradientBottom || '#d4a000'} 100%) !important;
            cursor: pointer !important;
            z-index: 999999 !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            overflow: hidden !important;
            transition: transform 0.3s ease !important;
        `;
        
        // DEBUG: Check if styles were applied
        console.log("Applied position styles:", {
            bottom: avatarBtn.style.bottom,
            left: avatarBtn.style.left,
            top: avatarBtn.style.top,
            right: avatarBtn.style.right,
            position: avatarBtn.style.position
        });
        
        // Check for video URL first
        const tessVideoUrl = config?.tessVideoUrl;
        
        if (tessVideoUrl) {
            // Create video element for talking avatar
            const video = document.createElement('video');
            video.src = tessVideoUrl;
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            // Get video fit setting from config
            const videoFit = config?.tessVideoFit || 'cover';
            video.style.cssText = `
                width: 180px;
                height: 180px;
                object-fit: ${videoFit};
                border: none;
                pointer-events: none;
            `;
            avatarBtn.appendChild(video);
            
            // Add "Ask Tess 👆" text overlay at bottom
            const textOverlay = document.createElement('div');
            textOverlay.style.cssText = `
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                color: #f8c400;
                text-align: center;
                padding: 15px 5px 8px 5px;
                font-size: 18px;
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 4px;
                pointer-events: none;
            `;
            textOverlay.innerHTML = `Ask Tess <span style="font-size: 20px;">👆</span>`;
            avatarBtn.appendChild(textOverlay);
            
        } else {
            // Fallback to image if no video
            const tessImage = config?.tessImage;
            if (tessImage) {
                avatarBtn.innerHTML = `<img src="${tessImage}" style="width: 170px; height: 170px; border-radius: 50%; object-fit: cover; border: 3px solid white;">`;
            } else {
                // Fallback icon
                avatarBtn.innerHTML = `<i class="fas fa-user-circle" style="font-size: 140px; color: white;"></i>`;
            }
        }
        // ===== END REPLACEMENT =====
        
        // Add hover effect
        avatarBtn.addEventListener('mouseenter', () => {
            avatarBtn.style.transform = 'scale(1.1)';
        });
        avatarBtn.addEventListener('mouseleave', () => {
            avatarBtn.style.transform = 'scale(1)';
        });
        
        // Click handler
        avatarBtn.addEventListener('click', () => {
            console.log("🖱️ Avatar button clicked - activating Tess");
            avatarBtn.remove();
            activateTess();
        });
        
        document.body.appendChild(avatarBtn);
        console.log(`✅ Avatar button created at ${position}`);
    }

    function justBrowsing() {
        console.log("👆 Just Browsing clicked - showing persistent avatar");
        
        // Remove splash screen elements
        const overlay = document.getElementById('splashOverlay');
        if (overlay) overlay.remove();

        const splashWidget = document.getElementById('splash-widget');
        if (splashWidget) splashWidget.remove();

        
        // Get splash config for persistent button settings
        const config = window.BotemiaConfig.modules?.splashScreen;
        if (config?.persistentButton?.enabled) {
            // Show persistent avatar button
            showPersistentAvatar();
        } else {
            // Fallback to showing main widget directly
            if (!window.mainWidget || !document.body.contains(window.mainWidget)) {
                window.mainWidget = createMainWidget();
                document.body.appendChild(window.mainWidget);
            }
            window.mainWidget.style.display = 'block';
        }
    }

    window.disableBridgeTriggers = false;
    window.addEventListener('message', function(event) {
        if (event.data.type === 'DASHBOARD_COMMAND') {
            if (event.data.command === 'toggleOverlays') { window.disableBridgeTriggers = event.data.disabled; }
            return;
        }
        if (event.data.type === 'MODULE_TRIGGERED' && !window.disableBridgeTriggers) { window.showModule(event.data.module, event.data.triggerPhrase); }
    });

    // ===== LOAD WIDGET =====
    function initWidget() {
        if (document.querySelector('lemon-slice-widget')) { console.log('✅ Widget already exists'); return; }
        setTimeout(() => { showSplash(); }, 100);
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@lemonsliceai/lemon-slice-widget';
        script.type = 'module';
        script.onload = () => { console.log('✅ Widget script loaded'); };
        script.onerror = () => console.error('❌ Failed to load widget');
        document.head.appendChild(script);
    }

    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initWidget); }
    else { initWidget(); }

    console.log('✅ Botemia Bridge v5.4 loaded for', window.BotemiaConfig.name);
})();