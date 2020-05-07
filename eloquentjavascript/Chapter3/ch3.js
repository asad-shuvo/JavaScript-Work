const makeNoise = function(){
    console.log('Ping');
}

makeNoise();


const hummus = function(factor){
    
    const test = function(t){
        console.log('its accessable');
    }
    
    const ingredient = function(amount,unit,name){
       test();
        let ingerdientAmount = amount * factor;
        if(ingerdientAmount>1){
            unit+='s';
        }
        console.log(`${ingerdientAmount}  ${unit}  ${name}`);
    };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
    test(10);
    };
hummus(10);
