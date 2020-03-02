/*
 *  I18n.js
 *  =======
 *
 *  Simple localization util.
 *  1. Store your localized labels in json format: `localized-content.json`
 *  2. Write your markup with key references using `data-i18n` attributes.
 *  3. Explicitly invoke a traverse key resolver: `i18n.localize()`
 *     OR
 *     Change the language, and the contents will be refreshed: `i18n.lang('en')`
 *
 *  This util relies on jQuery to work. I would recommend using the latest version
 *  available (1.12.x or 2.1.4+), although this will probably run with any older
 *  version since it is only taking advantage of `$.getJSON()` and the jQuery
 *  selector function `$()`.
 * 
 *  © 2016 Diogo Simões - diogosimoes.com
 *
 */

var demoJson = {
    "header": {
        "howItWorks": {
            "pl": "Jak to działa",
            "en": "How it works",
        },
        "services": {
            "pl": "Usługi",
            "en": "Services",
        },
        "about": {
            "pl": "O platformie",
            "en": "About platform",
        },
        "contact": {
            "pl": "kontakt",
            "en": "Contact",
        },
        "platform": {
            "pl": "Platforma",
            "en": "Platform",
        },
        "goToPlatform": {
            "pl": "Przejdź do platformy",
            "en": "Go to platform",
        },
        "followUs": {
            "pl": "Śledź nas",
            "en": "Follow us"
        }
    },
    "sample-container": {
        "title": {
            "pl": "Przykładowy raport",
            "en": "Sample report",
        },
        "description": {
            "pl": "Obejrzyj raport o terenie wygenerowany przez naszą platformę",
            "en": "View the sample land report generated by our platform",
        },
    },
    "newsletter-container": {
        "title": {
            "pl": "Zapisz się do newslettera",
            "en": "Subscribe to newsletter",
        },
        "description": {
            "pl": "Bądź na bieżąco z nami.",
            "en": "Stay up to date with us.",
        },
        "email-placeholder": {
            "pl": "Twój email",
            "en": "Your email",
        },
    },
    "footer-container": {
        "copyright": {
            "pl": "Wszystkie Prawa Zastrzeżone",
            "en": "All Rights Reserved",
        },
    },
    "services-container": {
        "title": {
            "pl": "Usługi",
            "en": "Our services",
        },
        "description": {
            "pl": "Uzyskaj przyjazny dla użytkownika raport działki online już teraz !",
            "en": "Stop wasting time and money requesting and managing manual land analysis. Get user-friendly land report online now !",
        },
        "landslides": {
            "pl": "osuwiska",
            "en": "Landslides detection",
        },
        "landslides-desc": {
            "pl": "Sprawdź czy twoja działka znajduje się w strefie zagrożenia nagłych przemieszczeń mas ziemnych. Uniknij popękanych ścian w swoim budynku.",
            "en": "Detect whether your plot is in the danger zone of sudden ground movements. Avoid wall cracking in your building.",
        },
        "floodplains": {
            "pl": "tereny zalewowe",
            "en": "floodplains detection",
        },
        "floodplains-desc": {
            "pl": "Wiadomo, że powódź to żadna przyjemność. Zminimalizuj ryzyko kupna działki na terenie zalewowym.",
            "en": "Flooding is not a pleasure. Minimize risk of buying land within flood area.",
        },
        "arealighting": {
            "pl": "Naświetlenie terenu",
            "en": "area lighting",
        },
        "arealighting-desc": {
            "pl": "Ogniwa fotowoltaiczne oraz kolektory solarne wymagają instalacji na dobrze naświetlonym terenie. Dzięki naszej usłudze ciesz się udaną inwestycją w zasilanie energią słoneczną.",
            "en": "Photovoltaic cells and solar collectors requires to be installed in well irradiated place. Smart investment is possible with our service.",
        },
        "airpollution": {
            "pl": "zanieczyszczenie powietrza",
            "en": "air pollution",
        },
        "airpollution-desc": {
            "pl": "Otrzymaj dane na temat zanieczyszczenia powietrza w konkretnym miejscu w skali roku. Informacje pochodzą z kilku lat wstecz.",
            "en": "Receive data about yearly air pollution in selected place. Our information consists of data from several previous years.",
        },
        "stinkyspots": {
            "pl": "śmierdzące miejsca",
            "en": "stinky spots",
        },
        "stinkyspots-desc": {
            "pl": "Codzienne życie w okolicy oczyszczalni ścieków, fermy drobiu czy innych zakładów przemysłowych może być uciążliwe. Uniknij przykrego zapachu w pobliżu swojego domu.",
            "en": "Living next to wastewater treatment station, poultry farm and many other manufacturing plants can be arduous. Avoid horrible smell from those places.",
        },
        "communicationres": {
            "pl": "środki komunikacji",
            "en": "communication resources",
        },
        "communicationres-desc": {
            "pl": "Prawie 14 000 000 ludzi w Polsce jest wykluczonych komunikacyjnie. Do więcej niż 1/5 sołectw nie dociera żaden transport publiczny. Nasz produkt pozwoli uniknąć takiego problemu, dzięki analizie bazy przystanków komunikacji publicznej, ocenimy jak dobrze skomunikowany jest wybrany przez ciebie teren.",
            "en": "No public transport reaches more than one-fifth of the villages. Our product will avoid communication exclusion, thanks to the analysis of the public transport stops database.",
        }
    },
    "contact-container": {
        "title": {
            "pl": "Skontaktuj się z nami",
            "en": "Contact us",
        },
        "description": {
            "pl": "Skontaktuj się z nami za pomocą poniższego formularza.",
            "en": "Get in touch with us using contact form below.",
        },
        "letstalk": {
            "pl": "Porozmawiajmy o projekcie",
            "en": "Let's talk about the project.",
        },
        "letstalk-desc": {
            "pl": "Będzie nam miło, jeśli skontaktujesz się z nami w sprawie pytań, sugestii lub współpracy.",
            "en": "We would be pleased if you contact us with questions, suggestions or cooperation.",
        },
        "name": {
            "pl": "Imie",
            "en": "Name",
        },
        "email": {
            "pl": "Email",
            "en": "Email",
        },
        "message": {
            "pl": "Wiadomość",
            "en": "Messege",
        },
        "message-placeholder": {
            "pl": "Treść wiadomości",
            "en": "Messege content",
        },
        "email-placeholder": {
            "pl": "jankowalski@gmail.com",
            "en": "johnsmith@gmail.com",
        },
        "name-placeholder": {
            "pl": "Jan Kowalski",
            "en": "John Smith",
        },
    },
    "slider-container": {
        "title": {
            "pl": "Jak to wygląda ?",
            "en": "How it looks like ?",
        }
    },
    "howitworks-container": {
        "title": {
            "pl": "Jak to działa ?",
            "en": "How it works ?",
        },
        "description": {
            "pl": "Za pomocą poniższych 4 kroków możesz łatwo przeanalizować pożądany teren.",
            "en": "An overview of how you can easily analyze desired plot with simple 4 steps.",
        },
        "first": {
            "pl": "Załóż darmowe konto",
            "en": "Create a free account",
        },
        "first-desc": {
            "pl": "Przejdź do platformy, załóż darmowe konto i wypróbuj wszystkie funkcjonalności naszej aplikacji.",
            "en": "Go to the platform, create a free account and try all the functionalities of our application.",
        },
        "second": {
            "pl": "Wybierz działkę",
            "en": "Select a plot",
        },
        "second-desc": {
            "pl": "Wpisz adres i wskaż działkę lub narysuj na mapie teren, który chcesz przeanalizować.",
            "en": "Enter the address and indicate the plot or draw the area on the map you want to analyze.",
        },
        "third": {
            "pl": "Wybierz potrzebne informacje",
            "en": "Select the information you need",
        },
        "third-desc": {
            "pl": "Zaznacz informację, które chciałbyś uzyskać w raporcie o docelowej działce.",
            "en": "Select the information you would like to get in the report about the target plot.",
        },
        "fourth": {
            "pl": "Pobierz gotowy raport",
            "en": "Download the report",
        },
        "fourth-desc": {
            "pl": "Pobierz raport przygotowany w wygodny i przejrzysty sposób w formacie pdf. Dokument zawiera  szczegółowe dane o każdym wybranym obszarze, który chciałeś przeanalizować.",
            "en": "Download the report prepared in a convenient and transparent way in pdf format. Which will incorporate the determined data about each selected area that you were interested in.",
        },
    },
    "buttons": {
        "download": {
            "pl": "Pobierz",
            "en": "Download",
        },
        "submit": {
            "pl": "Zatwierdź",
            "en": "Submit",
        },
    }
};

(function () {
	this.I18n = function (defaultLang) {
		var lang = defaultLang || 'pl';
		this.language = lang;

		(function (i18n) {
			i18n.contents = demoJson;
			i18n.contents.prop = function (key) {
				var result = this;
				var keyArr = key.split('.');
				for (var index = 0; index < keyArr.length; index++) {
					var prop = keyArr[index];
					result = result[prop];
				}
				return result;
			};
			i18n.localize();
		})(this);
	};

	this.I18n.prototype.hasCachedContents = function () {
		return this.contents !== undefined;
	};

	this.I18n.prototype.lang = function (lang) {
		if (typeof lang === 'string') {
			this.language = lang;
		}
		this.localize();
		return this.language;
	};

	this.I18n.prototype.localize = function () {
		var contents = this.contents;
		if (!this.hasCachedContents()) {
			return;
		}
		var dfs = function (node, keys, results) {
			var isLeaf = function (node) {
				for (var prop in node) {
					if (node.hasOwnProperty(prop)) {
						if (typeof node[prop] === 'string') {
							return true;
						}
					}
				}
			}
			for (var prop in node) {
				if (node.hasOwnProperty(prop) && typeof node[prop] === 'object') {
					var myKey = keys.slice();
					myKey.push(prop);
					if (isLeaf(node[prop])) {
						//results.push(myKey.reduce((prev, current) => prev + '.' + current));	//not supported in older mobile broweser
						results.push(myKey.reduce( function (previousValue, currentValue, currentIndex, array) {
							return previousValue + '.' + currentValue;
						}));
					} else {
						dfs(node[prop], myKey, results);
					}
				}
			}
			return results;
		};
		var keys = dfs(contents, [], []);
		for (var index = 0; index < keys.length; index++) {
			var key = keys[index];
			if (contents.prop(key).hasOwnProperty(this.language)) {
				$('[data-i18n="'+key+'"]').text(contents.prop(key)[this.language]);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)[this.language]);
				$('[data-i18n-value="'+key+'"]').attr('value', contents.prop(key)[this.language]);
			} else {
				$('[data-i18n="'+key+'"]').text(contents.prop(key)['en']);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)['en']);
				$('[data-i18n-value="'+key+'"]').attr('value', contents.prop(key)['en']);
			}
		}
	};

}).apply(window);

$( document ).ready( function () {

	var i18n = new I18n();
	i18n.localize();
	$('.lang-picker #polish').addClass('selected');
    $('.lang-picker #polish').addClass('hidden');

	$('.lang-picker #polish').on('click', function () {
        i18n.lang('pl');
        $('.lang-picker #english').removeClass('hidden');
        $('.lang-picker #polish').addClass('hidden');
		selectLang($(this));
	})
	$('.lang-picker #english').on('click', function () {
        i18n.lang('en');
        $('.lang-picker #polish').removeClass('hidden');
        $('.lang-picker #english').addClass('hidden');
		selectLang($(this));
	})

	function selectLang (picker) {
		$('.lang-picker li').removeClass('selected');
        picker.addClass('selected');
        
	}
});
