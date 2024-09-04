const temperature = prompt("Quelle est la température actuelle ?");
const isRaining = prompt("Est-ce qu'il pleut ? (oui/non)");

if (temperature >= 25) {
    console.log("Il fait chaud. Vous devriez porter des vêtements légers.");
} else if (temperature >= 15 && temperature < 25) {
    if (isRaining === "oui") {
        console.log("Il fait frais et il pleut. Vous devriez porter un imperméable et des chaussures imperméables.");
    } else {
        console.log("Il fait frais. Vous devriez porter un pull léger ou une veste.");
    }
} else {
    if (isRaining === "oui") {
        console.log("Il fait froid et il pleut. Vous devriez porter un manteau imperméable, un bonnet et des bottes.");
    } else {
        console.log("Il fait froid. Vous devriez porter un manteau chaud, une écharpe et des chaussures fermées.");
    }
}