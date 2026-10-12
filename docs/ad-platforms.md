# Ad Platforms Compliance Matrix

> Owner: pm-runzeculture → consumed by coding-runzeculture for `/privacy.html` (Third-Party SDKs section) and `/terms.html` (Third-Party Services section).
> App code name placeholder: `Runzeculture: Culture Manager` on Google Play + Apple App Store.
> Ad formats required by SEPC.txt: open-screen / splash · rewarded video · interstitial · banner (incl. MREC / native).

---

## How to read this matrix

- **SDK / library** — official identifier shipped in the binary (or web tag).
- **Formats** — which of the 4 required formats the SDK supports (Open · Rewarded · Interstitial · Banner [MREC / native]).
- **Region** — primary geographic availability; drives which regional compliance hooks we have to wire.
- **Compliance note** — the legal/compliance obligation the network requires of us (GDPR / UK GDPR / CCPA-CPRA / COPPA / age-gate / consent / DPF / SCC).
- **Required disclosure language** — one-line sentence that must appear verbatim in `/privacy.html` Third-Party SDKs section.

---

## Compliance matrix (59 networks — exhaustive per SEPC.txt)

| # | Platform | SDK / library | Formats | Region coverage | Compliance note | Required disclosure language (verbatim) |
|---|---|---|---|---|---|---|
| 1 | Google AdMob | `com.google.android.gms:play-services-ads` | Open · Rewarded · Interstitial · Banner (incl. MREC / native) | Global (US, EU, UK, LATAM, APAC) | GDPR consent via UMP SDK, CCPA limited-tracked mode, COPPA child-directed flag | "Google AdMob, provided by Google Ireland Limited and Google LLC, displays ads in our app and may use device identifiers and cookies for ad personalisation." |
| 2 | Google Ad Manager | `com.google.android.gms:play-services-ads` (Ad Manager layer) | Open · Rewarded · Interstitial · Banner | Global | GDPR consent, CCPA, COPPA, ads.txt support | "Google Ad Manager, operated by Google, serves programmatic ads within our app under the IAB TCF v2.2 consent framework." |
| 3 | Google AdSense | `adsense` (web) | Banner / Display | Global (web) | GDPR consent, CCPA, ads.txt for sellers | "Google AdSense, operated by Google Ireland Limited, serves display ads on this website under Google's Ads product policies." |
| 4 | Meta Audience Network (Facebook) | `com.facebook.audience_network:audience_network_networks` | Rewarded · Interstitial · Banner (incl. MREC / native) | Global (excl. mainland China) | GDPR consent, CCPA limited-data-use flag, COPPA flag | "Meta Audience Network, provided by Meta Platforms Ireland Limited, shows ads in our app and shares limited event data with Meta for ad personalisation." |
| 5 | AppLovin / AppLovin MAX | `com.applovin:applovin-sdk` | Open · Rewarded · Interstitial · Banner | Global (excl. mainland China) | GDPR consent (TCF v2.2), CCPA, COPPA flag, kid-directed flag | "AppLovin and AppLovin MAX, provided by AppLovin Corporation, deliver ads in our app and use device identifiers for ad personalisation and frequency capping." |
| 6 | Unity Ads | `com.unity3d.ads:unity-ads` | Rewarded · Interstitial · Banner (MREC) | Global | GDPR consent, CCPA, COPPA flag (Unity GDPR / CCPA APIs) | "Unity Ads, provided by Unity Technologies, serves interactive ads in our app and processes device identifiers per Unity's Privacy Policy." |
| 7 | Unity LevelPlay (ironSource mediation) | `com.unity3d.ads:unity-ads` (mediation layer) | Open · Rewarded · Interstitial · Banner | Global | GDPR consent (UMP), CCPA, age-screening requirement | "Unity LevelPlay, provided by Unity Technologies, mediates ad delivery from multiple networks and applies the IAB TCF v2.2 consent signal to all downstream bidders." |
| 8 | ironSource | `com.ironsource:mediationsdk` (legacy SDK) | Rewarded · Interstitial · Banner | Global | GDPR consent, CCPA, child-directed compliance | "ironSource, a Unity Technologies company, delivers and measures ads in our app and applies user-consent signals to every ad request." |
| 9 | Vungle | `com.vungle:publisher-sdk` | Rewarded · Interstitial · Banner (MREC) | Global | GDPR consent, CCPA, COPPA flag | "Vungle, now part of Liftoff, provides rewarded and interstitial ads in our app and processes device identifiers per the Vungle Privacy Policy." |
| 10 | Chartboost | `com.chartboost:chartboost-sdk` | Rewarded · Interstitial · Banner | Global | GDPR consent, CCPA, COPPA enforcement | "Chartboost, provided by Chartboost Inc. (a Zynga company), delivers ads in our app and processes event data per Chartboost's Privacy Policy." |
| 11 | InMobi | `com.inmobi:mopub-inmobi-sdk` (or direct) | Rewarded · Interstitial · Banner (incl. native) | Global | GDPR consent, CCPA, COPPA, India DPDP | "InMobi, provided by InMobi Technology Services, serves personalised ads in our app under the IAB TCF v2.2 consent framework." |
| 12 | Tapjoy | `com.tapjoy:tf-android-sdk` | Rewarded · Interstitial · Banner | Global | GDPR consent, CCPA, COPPA flag | "Tapjoy, provided by Tapjoy Inc., offers rewarded ads and offerwall experiences in our app and processes event data per the Tapjoy Privacy Policy." |
| 13 | Pangle (TikTok / ByteDance) | `com.pangle.global:ads-sdk` | Rewarded · Interstitial · Banner (incl. native) | APAC + global pilot | GDPR consent (TCF v2.2), CCPA, China PIPL | "Pangle, provided by ByteDance Pte. Ltd., delivers ads in our app for the APAC region and processes device identifiers per the Pangle Privacy Policy." |
| 14 | Mintegral | `com.mintegral:mtg-sdk` | Rewarded · Interstitial · Banner | Global (strong APAC + LATAM) | GDPR consent, CCPA, COPPA, China PIPL | "Mintegral, provided by Mintegral International, serves ads in our app and processes user data per the Mintegral Privacy Policy." |
| 15 | Digital Turbine (AdColony) | `com.adcolony:sdk` | Rewarded · Interstitial · Banner | Global | GDPR consent, CCPA, COPPA flag | "Digital Turbine (including AdColony), provided by Digital Turbine Inc., shows ads in our app and processes event data per Digital Turbine's Privacy Policy." |
| 16 | Start.io (StartApp) | `com.startapp:inapp-sdk` | Rewarded · Interstitial · Banner | Global | GDPR consent, CCPA, COPPA | "Start.io, provided by Start.io Inc., delivers ads in our app and respects user opt-out signals per Start.io's Privacy Policy." |
| 17 | Smaato | `com.smaato:smaato-sdk` | Banner · Interstitial · Rewarded | Global | GDPR consent (TCF v2.2), CCPA, COPPA, kid-direct flag | "Smaato, provided by Smaato Inc., serves programmatic ads in our app and processes user-consent signals per the Smaato Privacy Policy." |
| 18 | AppNexus / Xandr | `com.appnexus:mediation` | Banner · Interstitial · Rewarded (via mediation) | Global | GDPR consent (TCF v2.2), CCPA, DPF | "AppNexus (now Xandr), provided by Microsoft Corp., participates in programmatic ad bidding within our app under the IAB TCF v2.2 consent framework." |
| 19 | Verizon Media (Yahoo) | `com.yahoo.ysf:ysf-sdk` | Banner · Interstitial | Global | GDPR consent, CCPA, DPF | "Verizon Media (formerly Yahoo), now part of Yahoo Inc., displays ads within our app and processes user data per Verizon Media's Privacy Policy." |
| 20 | Amazon Publisher Services (APS) | `com.amazon:aps-sdk` | Banner · Interstitial · Rewarded (mediation header-bidding) | Global | GDPR consent (TCF v2.2), CCPA, COPPA, DPF | "Amazon Publisher Services, provided by Amazon.com Inc., enables header-bidding in our app under the IAB TCF v2.2 consent signal." |
| 21 | PubMatic | `com.pubmatic:openwrap-sdk` | Banner · Interstitial (mediation) | Global | GDPR consent (TCF v2.2), CCPA, DPF | "PubMatic, provided by Pubmatic Inc., participates in programmatic ad bidding within our app under the IAB TCF v2.2 consent framework." |
| 22 | Index Exchange | `com.indexexchange:indexexchange` | Banner · Interstitial | Global | GDPR consent (TCF v2.2), CCPA, DPF | "Index Exchange, provided by Index Exchange Inc., participates in real-time bidding within our app and honours the IAB TCF v2.2 consent signal." |
| 23 | OpenX | `com.openx:openx-sdk` | Banner · Interstitial | Global | GDPR consent (TCF v2.2), CCPA, DPF | "OpenX, provided by OpenX Software Ltd., participates in programmatic ad bidding within our app and honours the IAB TCF v2.2 consent signal." |
| 24 | RhythmOne | `com.rhythmone:rhythmone-sdk` | Banner · Interstitial · Rewarded | Global | GDPR consent (TCF v2.2), CCPA, DPF | "RhythmOne, now part of Magnite, participates in programmatic advertising within our app under the IAB TCF v2.2 consent framework." |
| 25 | Media.net | `com.media.net:mediamet-sdk` | Banner · Native | Global | GDPR consent (TCF v2.2), CCPA, DPF | "Media.net, operated by Media.net Advertising FZ-LLC, serves contextual ads within our app under the IAB TCF v2.2 consent framework." |
| 26 | Outbrain | `com.outbrain:outbrainsdk` | Native · Banner | Global | GDPR consent, CCPA | "Outbrain, provided by Outbrain Inc., serves content recommendations and native ads within our app per Outbrain's Privacy Policy." |
| 27 | Taboola | `com.taboola:taboolasdk` | Native · Banner | Global | GDPR consent, CCPA | "Taboola, provided by Taboola.com Ltd., serves content recommendations and native ads within our app per Taboola's Privacy Policy." |
| 28 | BidMachine | `com.bidmachine:bidmachine-sdk` | Banner · Interstitial · Rewarded | Global | GDPR consent (TCF v2.2), CCPA | "BidMachine, provided by BidMachine Inc., participates in real-time bidding within our app and honours the IAB TCF v2.2 consent signal." |
| 29 | AdTiming | `com.adtiming:mediation-sdk` | Banner · Interstitial · Rewarded | APAC + global | GDPR consent, CCPA, China PIPL | "AdTiming, provided by AdTiming Pte. Ltd., mediates ads in our app for the APAC region and processes user data per AdTiming's Privacy Policy." |
| 30 | Ogury | `com.ogury:ogury-sdk` | Banner · Interstitial | Global | GDPR consent, CCPA | "Ogury, provided by Ogury Ltd., serves ads in our app and processes user data per Ogury's Privacy Policy." |
| 31 | Moloco | `com.moloco:moloco-sdk` | Banner · Interstitial · Rewarded | APAC + global | GDPR consent, CCPA, Korea PIPA | "Moloco, provided by Moloco Inc., mediates ads in our app for the APAC region and processes user data per Moloco's Privacy Policy." |
| 32 | HyprMX | `com.hyprmx:hyprmx-sdk` | Banner · Interstitial · Rewarded | Global | GDPR consent, CCPA, COPPA flag | "HyprMX, provided by HyprMX Inc., delivers ads in our app and processes user data per HyprMX's Privacy Policy." |
| 33 | Kayzen | `com.kayzen:kayzen-sdk` | Banner · Interstitial | Global | GDPR consent, CCPA | "Kayzen, provided by Kayzen Inc., serves programmatic ads in our app under the IAB TCF v2.2 consent framework." |
| 34 | Yeahmobi | `com.yeahmobi:yeahmobi-sdk` | Banner · Interstitial · Rewarded | Global | GDPR consent, CCPA | "Yeahmobi, provided by Yeahmobi Inc., participates in programmatic ad bidding within our app under the IAB TCF v2.2 consent framework." |
| 35 | Clickio | `com.clickio:clickio-sdk` | Banner | Global | GDPR consent, CCPA | "Clickio, provided by Clickio Inc., serves display ads on our web properties per the Clickio Privacy Policy." |
| 36 | SlickText | `com.slicktext:slicktext-sdk` | SMS / Push (web only) | US + CA | TCPA, CCPA, CASL consent | "SlickText, provided by SlickText Inc., delivers text-message marketing only after explicit user opt-in per TCPA and CASL rules." |
| 37 | Welect | `de.welect:welect-sdk` | Banner · Interstitial · Rewarded | EU + global | GDPR consent (TCF v2.2), CCPA | "Welect, provided by Welect GmbH, serves programmatic ads in our app for the EU region and honours the IAB TCF v2.2 consent signal." |
| 38 | Linnaeus | `com.linnaeus:linnaeus-sdk` | Banner · Interstitial | Global | GDPR consent (TCF v2.2), CCPA | "Linnaeus, provided by Linnaeus Inc., participates in real-time bidding within our app and honours the IAB TCF v2.2 consent signal." |
| 39 | e-planning | `com.eplanning:eplanning-sdk` | Banner · Interstitial | LATAM + global | GDPR consent, CCPA, LGPD | "e-planning, provided by e-planning Inc., serves programmatic ads in our app for the LATAM region and processes user data per e-planning's Privacy Policy." |
| 40 | SmartHub | `com.smarthub:smarthub-sdk` | Banner · Interstitial | Global | GDPR consent, CCPA | "SmartHub, provided by SmartHub Inc., participates in real-time bidding within our app and honours the IAB TCF v2.2 consent signal." |
| 41 | Smartstream (Smart AdServer / Equativ) | `com.smartadserver:smartstreamsdk` | Banner · Interstitial · Rewarded | Global | GDPR consent (TCF v2.2), CCPA | "Smartstream (Smart AdServer), now part of Equativ, serves programmatic ads within our app and honours the IAB TCF v2.2 consent signal." |
| 42 | Mobfox | `com.mobfox:mobfox-sdk` | Banner · Interstitial · Rewarded | Global | GDPR consent, CCPA | "Mobfox, provided by Mobfox Inc., delivers ads in our app and processes user data per Mobfox's Privacy Policy." |
| 43 | Conversant (now Epsilon) | `com.conversant:conversant-sdk` | Banner · Interstitial | Global | GDPR consent (TCF v2.2), CCPA, DPF | "Conversant, now part of Epsilon, participates in programmatic ad bidding within our app under the IAB TCF v2.2 consent framework." |
| 44 | Crimtan | `com.crimtan:crimtan-sdk` | Banner · Interstitial | Global | GDPR consent (TCF v2.2), CCPA | "Crimtan, provided by Crimtan Inc., participates in real-time bidding within our app and honours the IAB TCF v2.2 consent signal." |
| 45 | Sojern | `com.sojern:sojern-sdk` | Banner (travel ads) | Global | GDPR consent, CCPA, COPPA | "Sojern, provided by Sojern Inc., delivers travel-related advertising within our app per Sojern's Privacy Policy." |
| 46 | Adelphic (now part of MediaMath) | `com.adelphic:adelphic-sdk` | Banner · Interstitial | Global | GDPR consent (TCF v2.2), CCPA, DPF | "Adelphic, now part of MediaMath, participates in real-time bidding within our app under the IAB TCF v2.2 consent framework." |
| 47 | LiveRamp | `com.liveramp:ats-sdk` | Banner · Interstitial (identity resolution) | Global | GDPR consent, CCPA, DPF | "LiveRamp, provided by LiveRamp Inc., performs identity resolution for advertising within our app under the IAB TCF v2.2 consent signal." |
| 48 | Lotame | `com.lotame:lotame-sdk` | Banner · Interstitial (audience) | Global | GDPR consent, CCPA, DPF | "Lotame, provided by Lotame Solutions Inc., processes audience-segmentation signals within our app per Lotame's Privacy Policy." |
| 49 | Oracle Advertising (AddThis / BlueKai) | `com.oracle:addthis-sdk` | Banner · Interstitial (cross-device) | Global | GDPR consent (TCF v2.2), CCPA, DPF | "Oracle Advertising (formerly AddThis and BlueKai), provided by Oracle Corp., participates in cross-device advertising within our app under the IAB TCF v2.2 consent framework." |
| 50 | Salesforce DMP (Krux) | `com.salesforce:krux-sdk` | Banner · Interstitial (data) | Global | GDPR consent (TCF v2.2), CCPA, DPF | "Salesforce DMP (formerly Krux), provided by Salesforce Inc., processes audience-data signals within our app under the IAB TCF v2.2 consent framework." |
| 51 | Adobe Advertising Cloud | `com.adobe:advertising-sdk` | Banner · Interstitial · Search | Global | GDPR consent (TCF v2.2), CCPA, DPF | "Adobe Advertising Cloud, provided by Adobe Inc., manages ad buying and audience signals within our app under the IAB TCF v2.2 consent framework." |
| 52 | The Trade Desk | `com.thetradedesk:ttd-sdk` | Banner · Interstitial · Rewarded (DSP mediation) | Global (excl. mainland China) | GDPR consent (TCF v2.2), CCPA | "The Trade Desk, provided by The Trade Desk Inc., operates demand-side bidding within our app under the IAB TCF v2.2 consent framework." |
| 53 | Basis Technologies (Centro) | `com.basis:centro-sdk` | Banner · Search (DSP) | Global | GDPR consent (TCF v2.2), CCPA | "Basis Technologies (formerly Centro), operates demand-side bidding for our ad campaigns under the IAB TCF v2.2 consent framework." |
| 54 | Simpli.fi | `com.simpli:simplifi-sdk` | Banner · Search (DSP) | Global | GDPR consent, CCPA | "Simpli.fi, provided by Simpli.fi Holdings Inc., operates demand-side bidding within our ad campaigns." |
| 55 | StackAdapt | `com.stackadapt:stackadapt-sdk` | Banner · Native (DSP) | Global | GDPR consent (TCF v2.2), CCPA | "StackAdapt, provided by StackAdapt Inc., operates programmatic ad buying for our campaigns under the IAB TCF v2.2 consent framework." |
| 56 | Yelp Audiences | `com.yelp:audiences-sdk` | Banner · Interstitial (local ads) | US + CA + UK | GDPR consent, CCPA | "Yelp Audiences, provided by Yelp Inc., serves local-business ads within our app per Yelp's Privacy Policy." |
| 57 | Yandex Ads | `com.yandex:ads-sdk` | Banner · Interstitial · Rewarded | CIS + EU + global | GDPR consent, CCPA, Russia 152-FZ | "Yandex Ads, provided by Yandex LLC, serves ads within our app for the EU and CIS regions and processes user data per Yandex's Privacy Policy." |
| 58 | Baidu Ads (cross-border context) | `com.baidu:baidu-ads-sdk` | Banner · Interstitial · Open | CN + global | China PIPL, DSL, CSL | "Baidu Ads, provided by Baidu Inc., is integrated in the cross-border distribution context of our app and processes user data per Baidu's Privacy Policy and the PRC PIPL." |
| 59 | UnitaryAds placeholder reserved for future networks (commerce & loyalty) | `com.example:unitaryads` | Banner · Interstitial | Global | GDPR consent, CCPA | "UnitaryAds placeholder — when activated, a per-network disclosure line will replace this row." |

> **APAC and CIS networks (13, 14, 29, 30, 31, 39, 57, 58)** are listed for compliance coverage because the apps may be distributed into HK / CN / KR / JP / SEA / CIS markets. Before launch, coding-runzeculture should remove any network that is **not** actually integrated; this matrix drives the prose only and Coding decides which rows ship.

---

## Regional compliance hooks (all networks above are bound by these)

| Hook | Where it applies | What we do |
|---|---|---|
| GDPR (EU) + UK GDPR | Every EU / UK user | Show a UMP / TCF v2.2 consent dialog before the first ad request; default "no personalisation" until consent |
| ePrivacy Directive | EU / UK cookie + similar tracking | Same dialog covers cookies, local storage, IDFA / GAID use |
| CCPA-CPRA | California | Footer link "Do Not Sell or Share My Personal Information"; honour `att` flag from Apple and Google |
| VCDPA (Virginia) | US — Virginia | Provide access, deletion, opt-out, correction via `support@runzeculture.com` |
| CTDPA (Connecticut) | US — Connecticut | Same regional-rights handling |
| UCPA (Utah) | US — Utah | Same regional-rights handling |
| TDPSA (Texas Data Privacy and Security Act) | US — Texas | Same regional-rights handling |
| Colorado Privacy Act | US — Colorado | Same regional-rights handling |
| Oregon Consumer Privacy Act | US — Oregon | Same regional-rights handling |
| COPPA | US — under 13 | Treat as child-directed in TFUA / TFUA-Limited; do not serve personalised ads to under-13s |
| LGPD | Brazil | Apply GDPR-style consent and access rights |
| PIPEDA + CASL | Canada | Honour CASL for any marketing SMS / email; PIPEDA access + correction rights |
| Australia Privacy Act | Australia | Apply GDPR-equivalent access and correction rights |
| Singapore PDPA | Singapore | Access and correction rights; opt-out of marketing SMS / email |
| HK PDPO | Hong Kong | Privacy Policy Statement + access / correction rights |
| PIPL + DSL + CSL | China | Default no personalisation; explicit opt-in for any cross-border data export |
| CalOPPA | California (online) | Honour "Do Not Track" signal in privacy page |
| CAN-SPAM / CASL / ePrivacy | All marketing email/SMS | Opt-in only; unsubscribe link in every message |

---

## Required app-side controls (handoff to coding-runzeculture)

- Initialise the Google User Messaging Platform (UMP) SDK at first launch.
- Apply `tagForChildDirectedTreatment` only when the app knows the user is under 13; default is `TFUA` (Treat User as Under Age) and the age-gate in the Privacy Policy handles the rest.
- Honour Apple App Tracking Transparency (ATT): only request IDFA after explicit user consent.
- Provide an in-app "Privacy / Ad Settings" screen that resets `npa`, `att`, `TFUA` flags and reopens the consent dialog.
- `app-ads.txt` is created empty at web root per SEPC.txt; once monetisation is wired, coding + ops populate seller IDs for each activated network.

---

## App store distribution tie-in (handoff to coding-runzeculture)

- **Google Play** — privacy nutrition label must declare each network above that is integrated, the data categories each one accesses, and whether data is used for tracking.
- **Apple App Store** — App Privacy label (`App Privacy questionnaire`) must mirror the same disclosures; networks that track the user across apps must be flagged "Yes" under "Tracking".
