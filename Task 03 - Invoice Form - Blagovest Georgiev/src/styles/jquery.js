$(function () {
  function autocalcSetup() {
    $("form[name=invoice]").jAutoCalc("destroy");
    $("form[name=invoice] div.calc-values").jAutoCalc({
      keyEventsFire: true,
      decimalPlaces: 2,
      emptyAsZero: true,
    });
    $("form[name=invoice]").jAutoCalc({ decimalPlaces: 2 });
  }

  autocalcSetup();

  function autoTransform() {
    const $currencyTransform = $("div.s-totalDiscount > i.currency");
    const $total = $(".i-grandTotal");
    const rightVal = 35;
    const topVal = 50;
    const params = {
      position: "absolute",
      display: "block",
      transform: "translate(0, -50%)",
      "pointer-events": "none",
      "font-style": "normal",
    };

    if ($total.val().length >= 10) {
      $currencyTransform.css({
        ...params,
        top: `${topVal + 28}%`,
        right: `${rightVal + 10}%`,
      });
    } else if ($total.val().length >= 8) {
      $currencyTransform.css({
        ...params,
        top: `${topVal}%`,
        right: `${rightVal - 10}%`,
      });
    } else if ($total.val().length >= 6) {
      $currencyTransform.css({
        ...params,
        top: `${topVal}%`,
        right: `${rightVal - 5}%`,
      });
    } else {
      $currencyTransform.css({
        ...params,
        top: `${topVal}%`,
        right: `${rightVal}%`,
      });
    }
  }

  $("input[name=quantity], input[name=price]").on("keyup", function () {
    autoTransform();
  });

  $(".btn-l-green").on("click", function (e) {
    e.preventDefault();

    const $productTemplate = $("div[name='j-container-0']")
      .find("div.calc-values")
      .last();
    const $newProduct = $productTemplate.clone(true);

    $newProduct.insertAfter($productTemplate);
    $newProduct.jAutoCalc("destroy");
    $newProduct.find("input").val("");

    autocalcSetup();
  });
});
