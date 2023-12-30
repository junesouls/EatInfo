document.addEventListener("DOMContentLoaded", function () {
    var currentNutImage = "peanut-12.png";
    var currentFruitImage = "apple.jpg";
    var nutImageElement = document.getElementById("myImage");
    var fruitImageElement = document.getElementById("fruitImage");
    var nutNutritionInfoElement = document.getElementById("nutritionInfo");
    var fruitNutritionInfoElement = document.getElementById("fruitNutritionInfo");

    nutImageElement.src = currentNutImage;
    fruitImageElement.src = currentFruitImage;
    updateNutritionInfo(currentNutImage);
    updateFruitNutritionInfo(currentFruitImage);

    function changeImage(nutImageName) {
        nutImageElement.src = nutImageName;
        updateNutritionInfo(nutImageName);
    }

    function changeFruitImage(fruitImageName) {
        fruitImageElement.src = fruitImageName;
        updateFruitNutritionInfo(fruitImageName);
    }

    function updateNutritionInfo(nutImageName) {
        var nutritionText = '';

        switch (nutImageName) {
            case 'almond.png':
                nutritionText = "Almond 100g Nutrition\n Calories: 575\nProtein(g): 21.2\nFiber(g): 12.2\nCalcium(mg): 264";
                break;
            case 'cashew.png':
                nutritionText = "Cashew 100g Nutrition\n Calories: 574\nProtein(g): 15.3\nFiber(g): 3\nCalcium(mg): 45";
                break;
            case 'pistachio.jpg':
                nutritionText = "Pistachio 100g Nutrition\n Calories: 567\nProtein(g): 20.9\nFiber(g): 9.9\nCalcium(mg): 107";
                break;
            case 'peanut-12.png':
                nutritionText = "Peanut 100g Nutrition\nCalories: 585\nProtein(g): 23.7\nFiber(g): 8\nCalcium(mg): 54";
                break;
            default:
                nutritionText = "Nutrition information not available";
                break;
        }

        nutNutritionInfoElement.textContent = nutritionText;
    }

    function updateFruitNutritionInfo(fruitImageName) {
        var fruitNutritionText = '';

        switch (fruitImageName) {
            case 'apple.jpg':
                fruitNutritionText = "Apple Nutrition\nCalories: 52\nCarbohydrates(g): 14\nFiber(g): 2.4\nVitamin C(mg): 0.5";
                break;
            case 'banana.png':
                fruitNutritionText = "Banana Nutrition\nCalories: 105\nCarbohydrates(g): 27\nFiber(g): 3\nVitamin C(mg): 10";
                break;
            case 'grapes.png':
                fruitNutritionText = "Grape Nutrition\nCalories: 69\nCarbohydrates(g): 18\nFiber(g): 0.9\nVitamin C(mg): 0.6";
                break;
            case 'orange.png':
                fruitNutritionText = "Orange Nutrition\nCalories: 43\nCarbohydrates(g): 8.3\nFiber(g): 2.4\nVitamin C(mg): 30";
                break;
            default:
                fruitNutritionText = "Nutrition information not available";
                break;
        }

        fruitNutritionInfoElement.textContent = fruitNutritionText;
    }

    document.getElementById("pea").addEventListener("click", function () {
        changeImage('peanut-12.png');
    });

    document.getElementById("pist").addEventListener("click", function () {
        changeImage('pistachio.jpg');
    });

    document.getElementById("cashew").addEventListener("click", function () {
        changeImage('cashew.png');
    });

    document.getElementById("almond").addEventListener("click", function () {
        changeImage('almond.png');
    });

    document.getElementById("apple").addEventListener("click", function () {
        changeFruitImage('apple.jpg');
    });

    document.getElementById("banana").addEventListener("click", function () {
        changeFruitImage('banana.png');
    });

    document.getElementById("grape").addEventListener("click", function () {
        changeFruitImage('grapes.png');
    });

    document.getElementById("orange").addEventListener("click", function () {
        changeFruitImage('orange.png');
    });
    var currentMeatImage = "steak.png";
    var meatImageElement = document.getElementById("meatImage");
    var meatNutritionInfoElement = document.getElementById("meatNutritionInfo");

    meatImageElement.src = currentMeatImage;
    updateMeatNutritionInfo(currentMeatImage);

    function changeMeatImage(meatImageName) {
        meatImageElement.src = meatImageName;
        updateMeatNutritionInfo(meatImageName);
    }

    function updateMeatNutritionInfo(meatImageName) {
        var meatNutritionText = '';

        switch (meatImageName) {
            case 'steak.png':
                meatNutritionText = "Steak 100g Nutrition\nCalories: 250\nProtein(g): 26\nFat(g): 17\nIron(mg): 2.1";
                break;
            case 'chicken_breast.jpg':
                meatNutritionText = "Chicken Breast 100g Nutrition\nCalories: 165\nProtein(g): 31\nFat(g): 3.6\nIron(mg): 0.7";
                break;
            case 'pork.png':
                meatNutritionText = "Pork 100g Nutrition\nCalories: 143\nProtein(g): 25\nFat(g): 4.4\nIron(mg): 0.9";
                break;
            default:
                meatNutritionText = "Nutrition information not available";
                break;
        }

        meatNutritionInfoElement.textContent = meatNutritionText;
    }

    document.getElementById("steak").addEventListener("click", function () {
        changeMeatImage('steak.png');
    });

    document.getElementById("chicken").addEventListener("click", function () {
        changeMeatImage('chicken_breast.jpg');
    });

    document.getElementById("pork").addEventListener("click", function () {
        changeMeatImage('pork.png');
    });
});