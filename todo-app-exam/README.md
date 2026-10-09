https://teams.microsoft.com/l/meetingrecap?driveId=b%21ybdJWXdFIkGDgCOz6xiA6ZEeIE85c_1ItQMzlQa2E---1yogw1xBQ417KUBuWXth&driveItemId=01437I32WN3ADU5AG25RBJLWHR7CLJH5Q2&sitePath=https%3A%2F%2Ffunet-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2F3ggyhmu26_frandi_folkuniversitetet_nu%2FIQDN2AdOgNrsQpXY8fiWk_YaAfiFDnHYbmQlRZj-8TzEINw&fileUrl=https%3A%2F%2Ffunet-my.sharepoint.com%2Fpersonal%2F3ggyhmu26_frandi_folkuniversitetet_nu%2FDocuments%2FInspelningar%2FM%C3%B6te+med+Dino+Franz%C3%A9n+MU26-20261009_164909-M%C3%B6tesinspelning.mp4%3Fweb%3D1&threadId=19%3Ameeting_NGZiNjBkNjgtMjBkOS00ZjBlLTkyMzItZjJiNjQzNWQxNWFi%40thread.v2&organizerId=2efa2a75-8789-4fc1-9867-d7705963d05c&tenantId=a4d3b9bf-2082-4eee-ab79-fd407faef1e5&callId=38ea434e-380d-4589-9e7d-4c43dbc2e122&threadType=Meeting&meetingType=MeetNow&subType=RecapSharingLink_RecapCore&recapType=Recording

1. Frågor om koden

Fråga 1. State-hantering: Hur håller din app reda på vilka uppgifter som finns och om de är klara? Vad händer med gränssnittet när datan uppdateras?

Svar: Appen sparar uppgifterna i en lista som heter todos. Varje uppgift har en text och ett done som är true eller false. När listan ändras med setTodos ritar React om sidan automatiskt, så det du ser alltid stämmer med datan.

Fråga 2. Oföränderlighet (Immutability): Varför får man inte ändra en befintlig array direkt med t.ex. .push() i React? Hur gör du istället när du lägger till eller tar bort en uppgift?

Svar: Tänk dig en whiteboard med en lapp som visar vad som finns i din kundvagn. React kollar bara om det är en ny lapp, inte om texten på den gamla har ändrats. Om du suddar och skriver om på samma lapp med .push() märker inte react skillnaden och visar fortfarande det gamla. Använder man istället en helt ny lapp och byter ut den med t.ex. setTodos([...todos, nyUppgift]) så ser react att det är en ny lapp och uppdaterar sidan.

2. Kodgranskning
   Koden försöker lägga till en ny todo i listan med .push(), men problemet är att .push() ändrar direkt i den befintliga arrayen. React kan inte se ändringen och komponenten renderas inte om.

Ett bättre sätt är att använda spread operatorn, return [... todos, text]; som skapar en helt ny lista och låter react se att något har ändras.

3. Hur gjorde du när du körde fast eller stötte på ett problem? Om du använde verktyg som AI, Google eller React-dokumentationen: ge ett konkret exempel på hur du tog hjälp för att förstå och lösa problemet själv.

När jag gjorde "Klar-knappen" så hade jag problemet att när jag klickade på en så blev alla uppgifter markerade som klara samtidigt. Var osäker på varför så jag använde AI för att granska och förklara problemet. Insåg att koden inte kollade exakt vilken uppgift som blev klickad på. Så jag lade till villkoret todo.id === idToToggle ? { ...todo, done: !todo.done } : todo så bara den aktuella uppgiften ändrades.
