const translations = [
  {
    source:
      "Anatomisk atlas er et illustrert oppslagsverk som beskriver alt du trenger å vite om menneskekroppen.",
    target:
      "Atlasul anatomic este o carte ilustrată de referință care descrie tot ce trebuie să știți despre corpul uman."
  }
];

const list = document.getElementById("translations");

translations.forEach(({ source, target }, index) => {
  const card = document.createElement("article");
  card.className = "translation-card";
  card.tabIndex = 0;
  card.setAttribute("aria-labelledby", `src-${index}`);
  card.setAttribute("aria-describedby", `trg-${index}`);

  const sourceLabel = document.createElement("span");
  sourceLabel.className = "label";
  sourceLabel.textContent = "Propoziție în norvegiană";

  const sourceText = document.createElement("p");
  sourceText.className = "source";
  sourceText.id = `src-${index}`;
  sourceText.textContent = source;

  const translation = document.createElement("p");
  translation.className = "translation";
  translation.id = `trg-${index}`;
  translation.textContent = target;

  card.append(sourceLabel, sourceText, translation);
  list.append(card);
});
