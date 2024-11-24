;/*FB_PKG_DELIM*/

__d("DateStrings",["fbt"],(function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;function a(a){n||(n=[h._("Sonntag"),h._("Montag"),h._("Dienstag"),h._("Mittwoch"),h._("Donnerstag"),h._("Freitag"),h._("Samstag")]);return n[a]}function b(a){p||(p=[h._("SONNTAG"),h._("MONTAG"),h._("DIENSTAG"),h._("MITTWOCH"),h._("DONNERSTAG"),h._("FREITAG"),h._("SAMSTAG")]);return p[a]}function c(a){o||(o=[h._("So"),h._("Mo"),h._("Di"),h._("Mi"),h._("Do"),h._("Fr"),h._("Sa")]);return o[a]}function d(a){q||(q=[h._("SO"),h._("MO"),h._("DI"),h._("MI"),h._("DO"),h._("FR"),h._("SA")]);return q[a]}function r(){i=[h._("Januar"),h._("Februar"),h._("M\u00e4rz"),h._("April"),h._("Mai"),h._("Juni"),h._("Juli"),h._("August"),h._("September"),h._("Oktober"),h._("November"),h._("Dezember")]}function e(a){i||r();return i[a-1]}function f(){i||r();return i.slice()}function s(a){l||(l=[h._("JANUAR"),h._("FEBRUAR"),h._("M\u00c4RZ"),h._("APRIL"),h._("MAI"),h._("JUNI"),h._("JULI"),h._("AUGUST"),h._("SEPTEMBER"),h._("OKTOBER"),h._("NOVEMBER"),h._("DEZEMBER")]);return l[a-1]}function t(a){j||(j=[h._("Jan."),h._("Feb."),h._("M\u00e4rz"),h._("Apr."),h._("Mai"),h._("Juni"),h._("Juli"),h._("Aug."),h._("Sept."),h._("Okt."),h._("Nov."),h._("Dez.")]);return j[a-1]}function u(a){k||(k=[h._("JAN"),h._("FEB"),h._("MRZ"),h._("APR"),h._("MAI"),h._("JUNI"),h._("JULI"),h._("AUG"),h._("SEP"),h._("OKT"),h._("NOV"),h._("DEZ")]);return k[a-1]}function v(a){m||(m=["",h._("st"),h._("nd"),h._("rd"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("st"),h._("nd"),h._("rd"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("th"),h._("st")]);return m[a]}function w(a){switch(a){case 1:return h._("1.");case 2:return h._("2.");case 3:return h._("3.");case 4:return h._("4.");case 5:return h._("5.");case 6:return h._("6.");case 7:return h._("7.");case 8:return h._("8.");case 9:return h._("9.");case 10:return h._("10.");case 11:return h._("11.");case 12:return h._("12.");case 13:return h._("13.");case 14:return h._("14.");case 15:return h._("15.");case 16:return h._("16.");case 17:return h._("17.");case 18:return h._("18.");case 19:return h._("19.");case 20:return h._("20.");case 21:return h._("21.");case 22:return h._("22.");case 23:return h._("23.");case 24:return h._("24.");case 25:return h._("25.");case 26:return h._("26.");case 27:return h._("27.");case 28:return h._("28.");case 29:return h._("29.");case 30:return h._("30.");case 31:return h._("31.");default:throw new Error("Invalid day of month.")}}function x(){return h._("Tag:")}function y(){return h._("Monat:")}function z(){return h._("Jahr:")}function A(){return h._("Stunde:")}function B(){return h._("Minute:")}function C(){return h._("tt")}function D(){return h._("mm")}function E(){return h._("jjjj")}function F(){return h._("Std.")}function G(){return h._("Min.")}function H(a){return a<12?h._("am"):h._("pm")}function I(a){return a<12?h._("AM"):h._("PM")}g.getWeekdayName=a;g.getUppercaseWeekdayName=b;g.getWeekdayNameShort=c;g.getUppercaseWeekdayNameShort=d;g._initializeMonthNames=r;g.getMonthName=e;g.getMonthNames=f;g.getUppercaseMonthName=s;g.getMonthNameShort=t;g.getUppercaseMonthNameShort=u;g.getOrdinalSuffix=v;g.getDayOfMonth=w;g.getDayLabel=x;g.getMonthLabel=y;g.getYearLabel=z;g.getHourLabel=A;g.getMinuteLabel=B;g.getDayPlaceholder=C;g.getMonthPlaceholder=D;g.getYearPlaceholder=E;g.getHourPlaceholder=F;g.getMinutePlaceholder=G;g.get12HourClockSuffix=H;g.getUppercase12HourClockSuffix=I}),226);
__d("IntlDateFormatsCLDRWidthEnum",[],(function(a,b,c,d,e,f){a=Object.freeze({FULL:"full",LONG:"long",MEDIUM:"medium",SHORT:"short"});f["default"]=a}),66);
__d("RegionDatetimePatterns",[],(function(a,b,c,d,e,f){a=Object.freeze({DATE_SHORT:"date_short",DATETIME_SHORT_SHORT:"dateTime_short_short",TIME_SHORT:"time_short",TIME_MEDIUM:"time_medium",J:"j"});f["default"]=a}),66);
__d("getCLDRLocalizedFormat",["CLDRDateFormatConfig","FBLogger","IntlDateFormatsCLDRWidthEnum","RegionDatetimePatterns","flipObject","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g=b("CLDRDateFormatConfig").CLDRConfigeratorFormats,h=b("CLDRDateFormatConfig").CLDRRegionalConfigeratorFormats,i=b("flipObject")(b("RegionDatetimePatterns"));function a(a){if(a==null)throw b("unrecoverableViolation")('Format: "'+a+'", not supported by configurator.',"internationalization");var c,d,e=a.split("_"),f=e[0];e=e.slice(1);var l=f+"Formats";a in i?d=h:d=g;switch(l){case"dateFormats":case"timeFormats":var m=j(e[0]);if(m==null)throw b("unrecoverableViolation")('Format: "'+a+'", category: "'+l+'", with unsupported width: "undefined"',"internationalization");c=d[l][m];if(c==null)throw b("unrecoverableViolation")('Format: "'+a+'", category: "'+l+'", '+('width: "'+m+'", with unsupported localization'),"internationalization");break;case"dateTimeFormats":m=j(e[0]);e=j(e[1]);if(m==null||e==null)throw b("unrecoverableViolation")('Format: "'+a+'", category: "'+l+'", with unsupported width: dateFormatKey="undefined" timeFormatKey="undefined"',"internationalization");c=d[l][m];var n=d.dateFormats[m],o=d.timeFormats[e];if(c==null)throw b("unrecoverableViolation")('Format: "'+a+'", category: "'+l+'", '+('date width: "'+m+'", and time width: ')+('"'+e+'", with unsupported localization'),"internationalization");c=c.replace("{0}",o).replace("{1}",n);break;default:l="availableFormats";m=f;m.includes("j")&&(m=k(m,d.timeFormats));c=d[l][m];if(c==null)throw b("unrecoverableViolation")('Format: "'+a+'", with key: "'+m+'", not supported by CLDR',"internationalization")}return c}function j(a){if(a==null)throw b("unrecoverableViolation")("Expected CLDR width key to not be null","internationalization");return b("IntlDateFormatsCLDRWidthEnum")[a.toUpperCase()]}function k(a,c){var d;c=c["short"];c==null?(b("FBLogger")("formatDate").blameToPreviousFile().warn('CLDR `timeFormat`, width `short` required for 24 hour localization not found for availableKey: "%s"',a),d="h"):d=c.includes("H")?"H":"h";return a.replace("j",d)}e.exports=a}),null);
__d("intlGetDateNumerics",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){b=b.utc===!0;b?b={dateDay:a.getUTCDate(),dateDayOfWeek:a.getUTCDay(),dateMonth:a.getUTCMonth(),dateYear:a.getUTCFullYear(),dateHours:a.getUTCHours(),dateMinutes:a.getUTCMinutes(),dateSeconds:a.getUTCSeconds(),dateMilliseconds:a.getUTCMilliseconds()}:b={dateDay:a.getDate(),dateDayOfWeek:a.getDay(),dateMonth:a.getMonth(),dateYear:a.getFullYear(),dateHours:a.getHours(),dateMinutes:a.getMinutes(),dateSeconds:a.getSeconds(),dateMilliseconds:a.getMilliseconds()};return b}f["default"]=a}),66);
__d("intlRenderJSDateSymbol",["DateStrings","padNumber","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,e,f,g){g===void 0&&(g=0);e=e.skipSuffixLocalization===!0;g=g;var h="";switch(b){case"\\":g++;if(f==null)throw c("unrecoverableViolation")("Only deprecated calls to `intlRenderJSDateSymbol()` use `localizedJSFormat`.","internationalization");h=f.charAt(g);break;case"d":h=c("padNumber")(a.dateDay,2);break;case"j":h=a.dateDay;break;case"S":h=d("DateStrings").getOrdinalSuffix(a.dateDay);break;case"D":h=d("DateStrings").getWeekdayNameShort(a.dateDayOfWeek);break;case"l":h=d("DateStrings").getWeekdayName(a.dateDayOfWeek);break;case"F":case"f":h=d("DateStrings").getMonthName(a.dateMonth+1);break;case"M":h=d("DateStrings").getMonthNameShort(a.dateMonth+1);break;case"m":h=c("padNumber")(a.dateMonth+1,2);break;case"n":h=a.dateMonth+1;break;case"Y":h=a.dateYear;break;case"y":h=(""+a.dateYear).slice(2);break;case"a":e?h=a.dateHours<12?"am":"pm":h=d("DateStrings").get12HourClockSuffix(a.dateHours);break;case"A":e?h=a.dateHours<12?"AM":"PM":h=d("DateStrings").getUppercase12HourClockSuffix(a.dateHours);break;case"g":a.dateHours===0||a.dateHours===12?h="12":h=a.dateHours%12;break;case"G":h=a.dateHours;break;case"h":a.dateHours===0||a.dateHours===12?h="12":h=c("padNumber")(a.dateHours%12,2);break;case"H":h=c("padNumber")(a.dateHours,2);break;case"i":h=c("padNumber")(a.dateMinutes,2);break;case"s":h=c("padNumber")(a.dateSeconds,2);break;case"X":h=c("padNumber")(a.dateMilliseconds,3);break;default:h=b}return{idx:g,rendered:String(h)}}g["default"]=a}),98);
__d("intlRenderCLDRDate",["CLDRDateFormatConfig","intlRenderJSDateSymbol","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g=/\w+/;function a(a,c,d){var e=b("CLDRDateFormatConfig").intlDateSpecialChars,f="",g="",i=!1,j=[],k;a=a.split(e.cldrDelimiter+e.singleQuote).join(e.singleQuoteHolder);for(var l=0,m=a.length;l<m;l++){var n=a.charAt(l);!i?n===e.cldrDelimiter?i=!0:f.length===0||f[0]===n?f+=n:n===e.singleQuoteHolder?f+=e.singleQuote:(k=h(f,d,c),j.push(k.rendered),f=n):(f.length!==0&&(k=h(f,d,c),j.push(k.rendered),f=""),n===e.cldrDelimiter?(i=!1,j.push(g),g=""):n===e.singleQuoteHolder?g+=e.singleQuote:g+=n)}if(g.length!==0)throw b("unrecoverableViolation")('Format: "'+a+'" must contain closing str literal delimiter',"internationalization");f.length!==0&&(k=h(f,d,c),j.push(k.rendered));return j.join("")}function h(a,c,d){a=i(a);return b("intlRenderJSDateSymbol")(c,a,d)}function i(a){if(a in b("CLDRDateFormatConfig").CLDRToPHPSymbolConversion)return b("CLDRDateFormatConfig").CLDRToPHPSymbolConversion[a];if(g.test(a))throw b("unrecoverableViolation")('Unsupported CLDR symbol: "'+a+'". If string literal, wrap in delimiters',"internationalization");return a}e.exports=a}),null);
__d("formatDate",["CLDRDateFormatConfig","DateFormatConfig","FBLogger","IsInternSite","getCLDRLocalizedFormat","intlGetDateNumerics","intlRenderCLDRDate","intlRenderJSDateSymbol","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";a=Object.freeze({today:null,yesterday:null,thisWeek:null,thisMonth:null,thisYear:null,withinDay:null,withinWeek:null,withinMonth:null,withinYear:null,older:null,future:null,allOtherTimes:null});function h(a,b,d){a=a;d=d||{skipSuffixLocalization:!1,skipPatternLocalization:!1,utc:!1,formatInternal:!1,throwCLDRError:!1};if(b==null||b===""||a==null||!(a||a===0))return"";typeof a==="string"&&(isNaN(Number(a))&&c("FBLogger")("i18n-formatDate").event("date_string_must_be_timestamp").blameToPreviousFile().mustfix("The date passed to formatDate is a string, but not a timestamp. formatDate expects strings to be a string representation of a Unix "+('timestamp but was passed "'+a+'"')),a=parseInt(a,10));typeof a==="number"&&(a=new Date(a*1e3));if(!(a instanceof Date))throw c("unrecoverableViolation")("The date passed to formatDate must be either a unix timestamp or JavaScript date object.","internationalization");if(isNaN(a.getTime()))throw c("unrecoverableViolation")("Invalid date passed to formatDate","internationalization");a.getTime()>=1e15&&c("FBLogger")("i18n-formatDate").event("date_too_far_in_future").blameToPreviousFile().info("The date passed to formatDate is too far in the future. Did you mix up milliseconds/seconds?");b=k(a,b);a=c("intlGetDateNumerics")(a,d);return i(b,a,d)}h.DEFAULT_FORMAT="M j, Y g:i A";h.periodNames=Object.freeze(Object.keys(a));function i(a,b,d){var e=a,f=!!d.skipPatternLocalization,g=d.formatInternal===!0;if(!f&&(g||!c("IsInternSite").is_intern_site))if(a in c("CLDRDateFormatConfig").supportedPHPFormatsKeys)try{f=c("CLDRDateFormatConfig").supportedPHPFormatsKeys[a];g=c("getCLDRLocalizedFormat")(f);return c("intlRenderCLDRDate")(g,d,b)}catch(a){c("FBLogger")("i18n-formatDate").event("CLDR_date_format_render_error").blameToPreviousFile().catching(a).mustfix("CLDR date format render error");if(d.throwCLDRError===!0)throw a}else if(c("DateFormatConfig").formats[a])e=c("DateFormatConfig").formats[a];else if(!c("IsInternSite").is_intern_site)if(a.length!==1)throw c("unrecoverableViolation")("Trying to localize an unsupported date format: `"+a+"`","internationalization");return j(e,d,b)}function j(a,b,d){var e=[];for(var f=0;f<a.length;f++){var g=a.charAt(f);g=c("intlRenderJSDateSymbol")(d,g,b,a,f);e.push(g.rendered);f=g.idx}return e.join("")}function k(a,b){var d=h.DEFAULT_FORMAT;if(typeof b==="string")return b;else if(typeof b==="object"){var e=a.getTime();for(var f=l(),g=Array.isArray(f),i=0,f=g?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var j;if(g){if(i>=f.length)break;j=f[i++]}else{i=f.next();if(i.done)break;j=i.value}j=j;var k=b[j.name];if(k!=null&&j.start<=e&&e<j.end)return k}c("FBLogger")("i18n-formatDate").event("matching_period_format_not_found").blameToPreviousFile().warn('Matching period not found for date "%s", using default format "%s". Current timestamp: "%s"',e,d,Date.now());return d}else{c("FBLogger")("i18n-formatDate").event("invalid_format_argument").blameToPreviousFile().warn('Called with invalid format "%s" (type: %s) for date "%s", using default: %s',b,typeof b,a.getTime(),d);return d}}function l(){var a=new Date(),b=a.getTime(),d=a.getFullYear(),e=a.getMonth(),f=new Date(d,a.getMonth()+1,0).getDate(),g=new Date(d,1,29).getMonth()===1?366:365,h=1e3*60*60*24,i=new Date(a.setHours(0,0,0,0)),j=new Date(d,e,i.getDate()+1);a=a.getDate()-(a.getDay()-c("DateFormatConfig").weekStart+6)%7;var k=new Date(b).setDate(a);a=new Date(b).setDate(a+7);var l=new Date(d,e,1);e=new Date(d,e,f+1);var m=new Date(d,0,1);d=new Date(d+1,0,1);return[{name:"today",start:i.getTime(),end:j.getTime()},{name:"withinDay",start:b-h,end:b+h},{name:"yesterday",start:i.getTime()-h,end:i.getTime()-1},{name:"thisWeek",start:k,end:a},{name:"withinWeek",start:b-h*7,end:b+h*7},{name:"thisMonth",start:l.getTime(),end:e.getTime()},{name:"withinMonth",start:b-h*f,end:b+h*f},{name:"thisYear",start:m.getTime(),end:d.getTime()},{name:"withinYear",start:b-h*g,end:b+h*g},{name:"older",start:-Infinity,end:b},{name:"future",start:b,end:+Infinity},{name:"allOtherTimes",start:-Infinity,end:+Infinity}]}b=h;g["default"]=b}),98);