
$(document).ready(function () {
	//eigene Methoden
	jQuery.validator.addMethod("namen", function (value, element) {
		return this.optional(element) || /^[a-zA-ZüÜäÄöÖéèàâç ]*$/.test(value);
	}, "Ungültige Zeichen!")
	jQuery.validator.classRuleSettings.namen = { namen: true };
	// regex für postleitzahl nur 4-5 Zahlen
	jQuery.validator.addMethod("postlz", function (value, element) {
		return this.optional(element) || /^([0-9\s\(\)\+\-\/]{4,5})*$/.test(value);
	}, "Postleitzahl?")
	jQuery.validator.classRuleSettings.postlz = { postlz: true };
	// methode für email 
	jQuery.validator.addMethod("emails", function (value, element) {
		return this.optional(element) || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);// /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(?:ch|com)$/*/
	}, "Bitte eine richtige E-Mail Adresse! 'beispiele1@hotmail.ch, .com',etc.")
	jQuery.validator.classRuleSettings.emails = { emails: true };
	// methode für strasse
	jQuery.validator.addMethod("street", function (value, element) {
		return this.optional(element) || /^[a-zA-ZäöüÄÖÜ]+[a-zA-Z0-9äöüÄÖÜ .,]*$/.test(value);
	}, "Geben Sie die Strasse ein")
	jQuery.validator.classRuleSettings.street = { street: true };
	// methode für hausnummer
	jQuery.validator.addMethod("number", function (value, element) {
		return this.optional(element) || /^[a-zA-Z0-9 .,-]{0,5}$/.test(value);
	}, "Geben Sie Hausnummer ein")
	jQuery.validator.classRuleSettings.number = { number: true };
	// methode für telefonnummer
	jQuery.validator.addMethod("phone", function (value, element) {
		return this.optional(element) || /^[\d()+-\s]{10,20}$/.test(value);
	}, "Geben Sie eine gültige Telefonnummer ein (mind. 10 Zeichen, max. 20 Zeichen, nur Zahlen, Pluszeichen (+) und Minuszeichen (-) sind erlaubt)");
	jQuery.validator.classRuleSettings.phone = { phone: true };


	//validieren
	$("#userform").validate({
		//Regeln
		rules: {

			vorname: {
				required: true,
				namen: true,
				minlength: 2
			},
			nachname: {
				required: true,
				namen: true,
				minlength: 2
			},
			wohnort: {
				required: true
			},
			strasse: {
				required: true,
				street: true
			},
			hnr: {
				required: true,
				number: true
			},
			plz: {
				required: true,
				postlz: true
			},

			email: {
				required: true,
				emails: true
			},
			tele: {
				required: true,
				phone: true,
				minlength: 10
			},

			username: {
				required: true,
				minlength: 5,
				remote: {
					type: "post",
					url: "../php/user.php"
				}
			},

			passwd: {
				required: true,
				minlength: 8
			},
			passwdcf: {
				required: true,
				minlength: 8,
				equalTo: "#passwd"
			},
			agb: {
				required: true
			}

		},


		success: function (element) {
			element
				.text('OK!').addClass('valid')
				.closest('.control-group').removeClass('error').addClass('success');
		},
		//Ausgabe

		//eigene Ausgabenachrichten eintragen
		messages: {


			vorname: {
				required: "Bitte Vornamen eingeben",
				minlength: "Name zu Kurz, mindestens 2 Buchstaben"
			},
			nachname: {
				required: "Bitte Nachname eingeben",
				minlength: "Name zu Kurz, mindestens 3 Buchstaben"
			},

			plz: {
				required: "Bitte eine 4- oder 5 stellige Postleitzahl eigeben",
				postlz: "Es werden nur 4- oder 5 stellige Postleitzahlen akzeptiert"
			},
			wohnort: {
				required: "Bitte einen Ort eingeben"
			},
			strasse: {
				required: "Bitte eine Strasse eingeben",
			},
			hnr: {
				required: "Bitte eine Hausnummer eingeben",
				number: "Maximal sind 5 zeichen erlaubt"
			},
			email: {
				required: "Bitte eine Mailadresse eingeben",
				email: "Bitte eine richtige E-Mail Adresse! 'beispiele1@hotmail.ch'"
			},
			tele: {
				required: "Bitte eine Telefon eingeben"
			},
			username: {
				required: "Benutzername eingeben",
				minlength: "Name zu Kurz, mindestens 5 Zeichen",
				remote: "Name existiert schon"
			},
			passwd: {
				required: "Bitte Passwort eingeben",
				minlength: "Passwort zu Kurz, mindestens 8 Zeichen"
			},
			passwdcf: {
				required: "Bitte Passwort wiederholen",
				minlength: "Passwort zu kurz, mindestens 8 Zeichen",
				equalTo: "Passwörter stimmen nicht überein"
			},
			agb: {
				required: "Bitte stimmen Sie den AGB zu."
			}
		},
	});
});