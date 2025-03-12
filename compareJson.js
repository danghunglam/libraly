function compareJsonObjects(json1, json2) {
  const item1 = json1;
  const item2 = json2;

  const keys1 = Object.keys(item1);
  const keys2 = Object.keys(item2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (typeof item1[key] === 'object' && typeof item2[key] === 'object') {

      if (
        item1[key] != null &&
        item2[key] != null &&
        !compareJsonObjects(item1[key], item2[key])
      ) {
        console.log(key)
        // console.log("json1",item1[key])
        // console.log("json2",item2[key])
        return false;
      }
    } else {
      if (JSON.stringify(item1[key]) !== JSON.stringify(item2[key])) {
        console.log(key)
        // console.log("json1",item1[key])
        // console.log("json2",item2[key])
        return false;
      }
    }
  }

  return true;
}

// Example usage:
const json1 = {
    "allow_type": [],
    "id": 206098,
    "uuid": "dabab38b-32a9-4af2-b293-bde5929394ea",
    "sku": "281000021",
    "name": "Classic Veggie - Ann test",
    "name_en": "Classic Veggie - Ann test",
    "name_seo": "",
    "friendly_seo_name": "classic-veggie-ann-test",
    "image": {
        "desktop_thumbnail": "https://static.phdvasia.com/development/menu/single/desktop_thumbnail_18dbbdde-4961-42d4-9dc6-622448f32e65.jpeg",
        "desktop_detail": "https://static.phdvasia.com/development/menu/single/desktop_detail_f20f2aaa-7994-4cfe-88da-e8eb9d103bc7.jpeg",
        "mobile_thumbnail": "https://static.phdvasia.com/development/menu/single/mobile_thumbnail_d2306a75-3b48-4ca0-8e29-728441e072cb.jpeg",
        "mobile_detail": "https://static.phdvasia.com/development/menu/single/mobile_detail_a4c19417-6a65-4920-9bcf-8c545ee6f2ef.jpeg"
    },
    "marketing_description": "",
    "main_description": "",
    "t_and_c": "",
    "piece": 1,
    "customize": {
        "tag": "classic",
        "hide_without_store": false,
        "Hide item for non-localise User": false,
        "promote_for_download_app": false,
        "deep_link_download_app": "https://pizzahutnewzealand.app.link/8FDEHmS1wyb"
    },
    "display_start": "2007-12-31 11:00:00",
    "display_end": "9999-12-31 10:59:59",
    "selling_start": "2007-12-31 11:00:00",
    "selling_end": "9999-12-31 10:59:59",
    "duration_date": 0,
    "price": 5.99,
    "price_without_tax": 5.99,
    "price_master": 5.99,
    "point": 0,
    "tax_rate": 0,
    "first_layers": [
        {
            "id": 140436,
            "uuid": "f247b4e9-cf87-47ab-acd5-3e6a3083709c",
            "name_en": "Extra Large",
            "name": "Extra Large",
            "sku": "XL",
            "image": null,
            "active": 1,
            "price": 0,
            "price_without_tax": 0,
            "price_master": 0,
            "point": 0,
            "tax_rate": 0,
            "short_name": "Extra Large",
            "sequence": 0,
            "second_layers": [
                {
                    "id": 496023,
                    "uuid": "53da8258-172e-48d2-95ce-b10772a6bcb7",
                    "name_en": "Pan",
                    "name": "Pan",
                    "sku": "01",
                    "image": null,
                    "active": 1,
                    "price": 0,
                    "price_without_tax": 0,
                    "price_master": 0,
                    "point": 0,
                    "tax_rate": 0,
                    "short_name": "Deep Pan",
                    "sequence": 0,
                    "second_id": 12317,
                    "main_description": "Our famously delicious thick-crust pizza"
                },
                {
                    "id": 496024,
                    "uuid": "e182185a-a49b-4bb9-ba4e-e87064204617",
                    "name_en": "San Francisco Style",
                    "name": "San Francisco Style",
                    "sku": "08",
                    "image": null,
                    "active": 1,
                    "price": 0,
                    "price_without_tax": 0,
                    "price_master": 0,
                    "point": 0,
                    "tax_rate": 0,
                    "short_name": "San Francisco Style",
                    "sequence": 1,
                    "second_id": 12758,
                    "main_description": "Our new classic with a sourdough style base, hand stretched for a light and airy texture Our new classic with a sourdough style base, hand stretched for a light and airy texture Our new classic with a sourdough style base, hand stretched for a light and a"
                },
                {
                    "id": 496025,
                    "uuid": "40783cbe-2dee-45e2-a578-23cb4976bd80",
                    "name_en": "Thin 'n Crispy",
                    "name": "Thin 'n Crispy",
                    "sku": "03",
                    "image": null,
                    "active": 1,
                    "price": 0,
                    "price_without_tax": 0,
                    "price_master": 0,
                    "point": 0,
                    "tax_rate": 0,
                    "short_name": "Thin 'n Crispy",
                    "sequence": 2,
                    "second_id": 12319,
                    "main_description": "A thin base with a thick crust and Garlic Sprinkles (not suitable for vegans)"
                }
            ],
            "first_id": 144,
            "main_description": "12\" Good for 6-8 UAT passed"
        },
        {
            "id": 140439,
            "uuid": "cf4e3ceb-4e33-407b-977b-ecaef8f0726c",
            "name_en": "Large",
            "name": "Large",
            "sku": "L",
            "image": null,
            "active": 1,
            "price": 4.99,
            "price_without_tax": 0,
            "price_master": 4.99,
            "point": 0,
            "tax_rate": 0,
            "short_name": "large",
            "sequence": 1,
            "second_layers": [
                {
                    "id": 496030,
                    "uuid": "bc74868a-f0b2-40e7-a103-ddb7965ef674",
                    "name_en": "Thin 'n Crispy",
                    "name": "Thin 'n Crispy",
                    "sku": "03",
                    "image": null,
                    "active": 1,
                    "price": 2.99,
                    "price_without_tax": 0,
                    "price_master": 2.99,
                    "point": 0,
                    "tax_rate": 0,
                    "short_name": "Thin 'n Crispy",
                    "sequence": 0,
                    "second_id": 12319,
                    "main_description": "A thin base with a thick crust and Garlic Sprinkles (not suitable for vegans)"
                }
            ],
            "first_id": 142,
            "main_description": "10\" Good for 4-6 UAT passed"
        }
    ],
    "toppings": {
        "default": [
            {
                "id": 22447,
                "uuid": "a98233f0-7910-481f-b35f-a0c279a51565",
                "sku": "L|290010003*XL|290010003-L|290510003*XL|290610003",
                "name": "Buffalo Sauce",
                "name_seo": "Buffalo Sauce",
                "image": {
                    "desktop_thumbnail": "",
                    "desktop_detail": "",
                    "mobile_thumbnail": "",
                    "mobile_detail": ""
                },
                "sequence": 0,
                "type": 0,
                "special": 2,
                "prices": null,
                "prices_without_tax": null,
                "points": null,
                "prices_master": null,
                "tax_rate": 0,
                "aggregator_code": "04c8871c8caae6bd870a72346a2ca8544e0ce8f0",
                "short_name": "Buffalo Sauce",
                "topping_type": []
            },
            {
                "id": 22461,
                "uuid": "1f0bb29d-2d5c-4d9c-b606-077004b3b9c7",
                "sku": "L|290020030*XL|290120023-L|290520017*XL|290620017",
                "name": "Shrimp",
                "name_seo": "Shrimp",
                "image": {
                    "desktop_thumbnail": "https://static.phdvasia.com/nz/toppings/Shrimp_2.png",
                    "desktop_detail": "https://static.phdvasia.com/nz/toppings/Shrimp_2.png",
                    "mobile_thumbnail": "https://static.phdvasia.com/nz/toppings/Shrimp_2.png",
                    "mobile_detail": "https://static.phdvasia.com/nz/toppings/Shrimp_2.png"
                },
                "sequence": 0,
                "type": 0,
                "special": 0,
                "prices": null,
                "prices_without_tax": null,
                "points": null,
                "prices_master": null,
                "tax_rate": 0,
                "aggregator_code": "b905693c5194981aee32da2b485774d3a97a5afb",
                "short_name": "Shrimp",
                "topping_type": []
            },
            {
                "id": 22465,
                "uuid": "a2e4eb12-1ed1-4e4c-9733-eeb5f8671488",
                "sku": "L|290060009*XL|290060009-L|290560009*XL|290660009",
                "name": "Peri Peri Drizzle",
                "name_seo": "Peri Peri Drizzle",
                "image": {
                    "desktop_thumbnail": "https://static.phdvasia.com/nz/toppings/Apricot-Drizzle_2.png",
                    "desktop_detail": "https://static.phdvasia.com/nz/toppings/Apricot-Drizzle_2.png",
                    "mobile_thumbnail": "https://static.phdvasia.com/nz/toppings/Apricot-Drizzle_2.png",
                    "mobile_detail": "https://static.phdvasia.com/nz/toppings/Apricot-Drizzle_2.png"
                },
                "sequence": 0,
                "type": 0,
                "special": 3,
                "prices": null,
                "prices_without_tax": null,
                "points": null,
                "prices_master": null,
                "tax_rate": 0,
                "aggregator_code": "e2dadbf07159fcafc52b073057670a10871b634c",
                "short_name": "Peri Peri Drizzle",
                "topping_type": []
            },
            {
                "id": 22539,
                "uuid": "da03bb81-1349-42b7-85ef-1233257dd6de",
                "sku": "L|na*XL|na-L|290520054*XL|290620054",
                "name": "Steak",
                "name_seo": "Steak",
                "image": {
                    "desktop_thumbnail": "https://static.phdvasia.com/nz/menu/topping/desktop_thumbnail_e9ce1c07-ebd3-4e98-88c2-eadb056a7269.png",
                    "desktop_detail": "https://static.phdvasia.com/nz/menu/topping/desktop_detail_37a6e4c1-3902-47b3-bcc5-57879e9ca27e.png",
                    "mobile_thumbnail": "https://static.phdvasia.com/nz/menu/topping/mobile_thumbnail_be48326e-4e14-47c1-a1c4-4b7a16b123c2.png",
                    "mobile_detail": "https://static.phdvasia.com/nz/menu/topping/mobile_detail_823e433a-dafd-49ef-a2de-8d3b68100e26.png"
                },
                "sequence": 0,
                "type": 0,
                "special": 0,
                "prices": {
                    "R": 0,
                    "LM": 0,
                    "ST": 0,
                    "L": 0,
                    "XL": 0
                },
                "prices_without_tax": {
                    "R": "0",
                    "LM": "0",
                    "ST": "0",
                    "L": "0",
                    "XL": "0"
                },
                "points": null,
                "prices_master": null,
                "tax_rate": 0,
                "aggregator_code": "",
                "short_name": "Steak",
                "topping_type": []
            },
            {
                "id": 22511,
                "uuid": "568aec2b-8632-4732-87b9-293381c30904",
                "sku": "L|na*XL|na*L|na*XL|na",
                "name": "NO Vegan Cheese",
                "name_seo": "NO Vegan Cheese",
                "image": {
                    "desktop_thumbnail": "",
                    "desktop_detail": "",
                    "mobile_thumbnail": "",
                    "mobile_detail": ""
                },
                "sequence": 3,
                "type": 1,
                "special": 1,
                "prices": null,
                "prices_without_tax": null,
                "points": null,
                "prices_master": null,
                "tax_rate": 0,
                "aggregator_code": "a6d95ca048ef12c016ca8ff1247245edfab74157",
                "short_name": "NO Vegan Cheese",
                "topping_type": []
            }
        ],
        "extra": [
            {
                "id": 22455,
                "uuid": "9d7f49b2-351f-4c57-a705-29ce5e8e5d4a",
                "sku": "L|290020035*XL|290120025-L|290520036*XL|290620036",
                "name": "Bacon",
                "name_seo": "Bacon",
                "image": {
                    "desktop_thumbnail": "https://static.phdvasia.com/nz/toppings/Bacon_2.png",
                    "desktop_detail": "https://static.phdvasia.com/nz/toppings/Bacon_2.png",
                    "mobile_thumbnail": "https://static.phdvasia.com/nz/toppings/Bacon_2.png",
                    "mobile_detail": "https://static.phdvasia.com/nz/toppings/Bacon_2.png"
                },
                "sequence": 0,
                "type": 0,
                "special": 0,
                "prices": null,
                "prices_without_tax": null,
                "points": null,
                "prices_master": null,
                "tax_rate": 0,
                "aggregator_code": "a1a854cf98dbeed3b525d8a9f306ef3ec72f3679",
                "short_name": "Bacon",
                "topping_type": []
            },
            {
                "id": 22460,
                "uuid": "d18aaea9-9af0-4548-99ef-5c14a8b6f7e9",
                "sku": "L|290020026*XL|290120021-L|290520026*XL|290620026",
                "name": "Chicken",
                "name_seo": "Chicken",
                "image": {
                    "desktop_thumbnail": "https://static.phdvasia.com/nz/toppings/Chicken_2.png",
                    "desktop_detail": "https://static.phdvasia.com/nz/toppings/Chicken_2.png",
                    "mobile_thumbnail": "https://static.phdvasia.com/nz/toppings/Chicken_2.png",
                    "mobile_detail": "https://static.phdvasia.com/nz/toppings/Chicken_2.png"
                },
                "sequence": 0,
                "type": 0,
                "special": 0,
                "prices": null,
                "prices_without_tax": null,
                "points": null,
                "prices_master": null,
                "tax_rate": 0,
                "aggregator_code": "baaa18844b8db958c57edddf824f4a8b5cd9e298",
                "short_name": "Chicken",
                "topping_type": []
            },
            {
                "id": 22461,
                "uuid": "1f0bb29d-2d5c-4d9c-b606-077004b3b9c7",
                "sku": "L|290020030*XL|290120023-L|290520017*XL|290620017",
                "name": "Shrimp",
                "name_seo": "Shrimp",
                "image": {
                    "desktop_thumbnail": "https://static.phdvasia.com/nz/toppings/Shrimp_2.png",
                    "desktop_detail": "https://static.phdvasia.com/nz/toppings/Shrimp_2.png",
                    "mobile_thumbnail": "https://static.phdvasia.com/nz/toppings/Shrimp_2.png",
                    "mobile_detail": "https://static.phdvasia.com/nz/toppings/Shrimp_2.png"
                },
                "sequence": 0,
                "type": 0,
                "special": 0,
                "prices": null,
                "prices_without_tax": null,
                "points": null,
                "prices_master": null,
                "tax_rate": 0,
                "aggregator_code": "b905693c5194981aee32da2b485774d3a97a5afb",
                "short_name": "Shrimp",
                "topping_type": []
            },
            {
                "id": 22497,
                "uuid": "a76b3211-22db-47ad-a295-6a2d1ac8117d",
                "sku": "L|290040003*XL|290140003-L|290540002*XL|290640002",
                "name": "Pineapple",
                "name_seo": "Pineapple",
                "image": {
                    "desktop_thumbnail": "https://static.phdvasia.com/nz/toppings/Pineapple_2.png",
                    "desktop_detail": "https://static.phdvasia.com/nz/toppings/Pineapple_2.png",
                    "mobile_thumbnail": "https://static.phdvasia.com/nz/toppings/Pineapple_2.png",
                    "mobile_detail": "https://static.phdvasia.com/nz/toppings/Pineapple_2.png"
                },
                "sequence": 0,
                "type": 0,
                "special": 0,
                "prices": null,
                "prices_without_tax": null,
                "points": null,
                "prices_master": null,
                "tax_rate": 0,
                "aggregator_code": "0983a1fc607d162240f5258f5b5b83b0449424d9",
                "short_name": "Pinapple",
                "topping_type": []
            }
        ]
    },
    "single_types": [],
    "menu_attributes": [],
    "display_price": "3.99",
    "min_price": 5.99,
    "min_point": 0,
    "product_type": 0,
    "is_combo": 0,
    "only_lunch": 0,
    "day_of_hut": 0,
    "special_dates": [],
    "opening_times": null,
    "closing_times": null,
    "exception_closing": null,
    "exception_opening": null,
    "outlet_timezone": "Pacific/Auckland",
    "display_categories": [
        {
            "uuid": "fbcd856e-1e37-4151-876b-fb2bd47c3e0d",
            "name": "Pizzas",
            "name_en": "Pizzas",
            "short_name": "Pizzas",
            "slug": "pizzas"
        }
    ],
    "discount": 1,
    "type": 0,
    "max_topping": 99,
    "max_extra": 99,
    "min_extra": 0,
    "disposition": [
        "C",
        "D",
        "R"
    ],
    "is_donation": 0,
    "min_total": 0,
    "max_total": 99999999,
    "category": {
        "id": 468,
        "uuid": "ad449dce-1287-4610-91af-735d92f5c62d",
        "category_type_id": 0,
        "sku": "2012",
        "name": {
            "en": "Pizza Reg"
        },
        "name_seo": "Pizza Reg",
        "image": {},
        "sequence": 0,
        "level": 0,
        "description": null,
        "short_name": "Pizza Reg"
    },
    "short_name": "Classic Veggie - Ann test",
    "allow_condiment": 0,
    "hide": 0,
    "is_alcohol": 0,
    "max_remove": 99
};
const json2 = {
    "only_lunch": 0,
    "min_point": 0,
    "min_total": 0,
    "t_and_c": "",
    "discount": 1,
    "exception_opening": null,
    "type": 0,
    "uuid": "dabab38b-32a9-4af2-b293-bde5929394ea",
    "tax_rate": 0,
    "exception_closing": null,
    "day_of_hut": 0,
    "name_seo": "",
    "price": 5.99,
    "id": 206098,
    "sku": "281000021",
    "outlet_timezone": "Pacific/Auckland",
    "max_topping": 99,
    "image": {
        "mobile_thumbnail": "https://static.phdvasia.com/development/menu/single/mobile_thumbnail_d2306a75-3b48-4ca0-8e29-728441e072cb.jpeg",
        "mobile_detail": "https://static.phdvasia.com/development/menu/single/mobile_detail_a4c19417-6a65-4920-9bcf-8c545ee6f2ef.jpeg",
        "desktop_thumbnail": "https://static.phdvasia.com/development/menu/single/desktop_thumbnail_18dbbdde-4961-42d4-9dc6-622448f32e65.jpeg",
        "desktop_detail": "https://static.phdvasia.com/development/menu/single/desktop_detail_f20f2aaa-7994-4cfe-88da-e8eb9d103bc7.jpeg"
    },
    "price_without_tax": 5.99,
    "duration_date": 0,
    "max_extra": 99,
    "is_combo": 0,
    "min_extra": 0,
    "piece": 1,
    "display_start": "2007-12-31 11:00:00",
    "selling_start": "2007-12-31 11:00:00",
    "name": "Classic Veggie - Ann test",
    "display_categories": [
        {
            "name": "Pizzas",
            "short_name": "Pizzas",
            "uuid": "fbcd856e-1e37-4151-876b-fb2bd47c3e0d",
            "slug": "pizzas",
            "name_en": "Pizzas"
        }
    ],
    "short_name": "Classic Veggie - Ann test",
    "is_donation": 0,
    "max_total": 99999999,
    "menu_attributes": [],
    "max_remove": 99,
    "customize": {
        "promote_for_download_app": false,
        "deep_link_download_app": "https://pizzahutnewzealand.app.link/8FDEHmS1wyb",
        "hide_without_store": false,
        "tag": "classic",
        "Hide item for non-localise User": false
    },
    "point": 0,
    "main_description": "",
    "closing_times": null,
    "allow_condiment": 0,
    "toppings": {
        "default": [
            {
                "image": {
                    "mobile_thumbnail": "",
                    "mobile_detail": "",
                    "desktop_thumbnail": "",
                    "desktop_detail": ""
                },
                "topping_type": [],
                "type": 0,
                "uuid": "a98233f0-7910-481f-b35f-a0c279a51565",
                "tax_rate": 0,
                "points": null,
                "special": 2,
                "sequence": 0,
                "prices_master": null,
                "name_seo": "Buffalo Sauce",
                "aggregator_code": "04c8871c8caae6bd870a72346a2ca8544e0ce8f0",
                "name": "Buffalo Sauce",
                "short_name": "Buffalo Sauce",
                "id": 22447,
                "prices_without_tax": null,
                "sku": "L|290010003*XL|290010003-L|290510003*XL|290610003",
                "prices": null
            },
            {
                "image": {
                    "mobile_thumbnail": "https://static.phdvasia.com/nz/toppings/Shrimp_2.png",
                    "mobile_detail": "https://static.phdvasia.com/nz/toppings/Shrimp_2.png",
                    "desktop_thumbnail": "https://static.phdvasia.com/nz/toppings/Shrimp_2.png",
                    "desktop_detail": "https://static.phdvasia.com/nz/toppings/Shrimp_2.png"
                },
                "topping_type": [],
                "type": 0,
                "uuid": "1f0bb29d-2d5c-4d9c-b606-077004b3b9c7",
                "tax_rate": 0,
                "points": null,
                "special": 0,
                "sequence": 0,
                "prices_master": null,
                "name_seo": "Shrimp",
                "aggregator_code": "b905693c5194981aee32da2b485774d3a97a5afb",
                "name": "Shrimp",
                "short_name": "Shrimp",
                "id": 22461,
                "prices_without_tax": null,
                "sku": "L|290020030*XL|290120023-L|290520017*XL|290620017",
                "prices": null
            },
            {
                "image": {
                    "mobile_thumbnail": "https://static.phdvasia.com/nz/toppings/Apricot-Drizzle_2.png",
                    "mobile_detail": "https://static.phdvasia.com/nz/toppings/Apricot-Drizzle_2.png",
                    "desktop_thumbnail": "https://static.phdvasia.com/nz/toppings/Apricot-Drizzle_2.png",
                    "desktop_detail": "https://static.phdvasia.com/nz/toppings/Apricot-Drizzle_2.png"
                },
                "topping_type": [],
                "type": 0,
                "uuid": "a2e4eb12-1ed1-4e4c-9733-eeb5f8671488",
                "tax_rate": 0,
                "points": null,
                "special": 3,
                "sequence": 0,
                "prices_master": null,
                "name_seo": "Peri Peri Drizzle",
                "aggregator_code": "e2dadbf07159fcafc52b073057670a10871b634c",
                "name": "Peri Peri Drizzle",
                "short_name": "Peri Peri Drizzle",
                "id": 22465,
                "prices_without_tax": null,
                "sku": "L|290060009*XL|290060009-L|290560009*XL|290660009",
                "prices": null
            },
            {
                "image": {
                    "mobile_thumbnail": "",
                    "mobile_detail": "",
                    "desktop_thumbnail": "",
                    "desktop_detail": ""
                },
                "topping_type": [],
                "type": 1,
                "uuid": "568aec2b-8632-4732-87b9-293381c30904",
                "tax_rate": 0,
                "points": null,
                "special": 1,
                "sequence": 3,
                "prices_master": null,
                "name_seo": "NO Vegan Cheese",
                "aggregator_code": "a6d95ca048ef12c016ca8ff1247245edfab74157",
                "name": "NO Vegan Cheese",
                "short_name": "NO Vegan Cheese",
                "id": 22511,
                "prices_without_tax": null,
                "sku": "L|na*XL|na*L|na*XL|na",
                "prices": null
            }
        ],
        "extra": [
            {
                "image": {
                    "mobile_thumbnail": "https://static.phdvasia.com/nz/toppings/Bacon_2.png",
                    "mobile_detail": "https://static.phdvasia.com/nz/toppings/Bacon_2.png",
                    "desktop_thumbnail": "https://static.phdvasia.com/nz/toppings/Bacon_2.png",
                    "desktop_detail": "https://static.phdvasia.com/nz/toppings/Bacon_2.png"
                },
                "topping_type": [],
                "type": 0,
                "uuid": "9d7f49b2-351f-4c57-a705-29ce5e8e5d4a",
                "tax_rate": 0,
                "points": null,
                "special": 0,
                "sequence": 0,
                "prices_master": null,
                "name_seo": "Bacon",
                "aggregator_code": "a1a854cf98dbeed3b525d8a9f306ef3ec72f3679",
                "name": "Bacon",
                "short_name": "Bacon",
                "id": 22455,
                "prices_without_tax": null,
                "sku": "L|290020035*XL|290120025-L|290520036*XL|290620036",
                "prices": null
            },
            {
                "image": {
                    "mobile_thumbnail": "https://static.phdvasia.com/nz/toppings/Chicken_2.png",
                    "mobile_detail": "https://static.phdvasia.com/nz/toppings/Chicken_2.png",
                    "desktop_thumbnail": "https://static.phdvasia.com/nz/toppings/Chicken_2.png",
                    "desktop_detail": "https://static.phdvasia.com/nz/toppings/Chicken_2.png"
                },
                "topping_type": [],
                "type": 0,
                "uuid": "d18aaea9-9af0-4548-99ef-5c14a8b6f7e9",
                "tax_rate": 0,
                "points": null,
                "special": 0,
                "sequence": 0,
                "prices_master": null,
                "name_seo": "Chicken",
                "aggregator_code": "baaa18844b8db958c57edddf824f4a8b5cd9e298",
                "name": "Chicken",
                "short_name": "Chicken",
                "id": 22460,
                "prices_without_tax": null,
                "sku": "L|290020026*XL|290120021-L|290520026*XL|290620026",
                "prices": null
            },
            {
                "image": {
                    "mobile_thumbnail": "https://static.phdvasia.com/nz/toppings/Shrimp_2.png",
                    "mobile_detail": "https://static.phdvasia.com/nz/toppings/Shrimp_2.png",
                    "desktop_thumbnail": "https://static.phdvasia.com/nz/toppings/Shrimp_2.png",
                    "desktop_detail": "https://static.phdvasia.com/nz/toppings/Shrimp_2.png"
                },
                "topping_type": [],
                "type": 0,
                "uuid": "1f0bb29d-2d5c-4d9c-b606-077004b3b9c7",
                "tax_rate": 0,
                "points": null,
                "special": 0,
                "sequence": 0,
                "prices_master": null,
                "name_seo": "Shrimp",
                "aggregator_code": "b905693c5194981aee32da2b485774d3a97a5afb",
                "name": "Shrimp",
                "short_name": "Shrimp",
                "id": 22461,
                "prices_without_tax": null,
                "sku": "L|290020030*XL|290120023-L|290520017*XL|290620017",
                "prices": null
            },
            {
                "image": {
                    "mobile_thumbnail": "https://static.phdvasia.com/nz/toppings/Pineapple_2.png",
                    "mobile_detail": "https://static.phdvasia.com/nz/toppings/Pineapple_2.png",
                    "desktop_thumbnail": "https://static.phdvasia.com/nz/toppings/Pineapple_2.png",
                    "desktop_detail": "https://static.phdvasia.com/nz/toppings/Pineapple_2.png"
                },
                "topping_type": [],
                "type": 0,
                "uuid": "a76b3211-22db-47ad-a295-6a2d1ac8117d",
                "tax_rate": 0,
                "points": null,
                "special": 0,
                "sequence": 0,
                "prices_master": null,
                "name_seo": "Pineapple",
                "aggregator_code": "0983a1fc607d162240f5258f5b5b83b0449424d9",
                "name": "Pineapple",
                "short_name": "Pinapple",
                "id": 22497,
                "prices_without_tax": null,
                "sku": "L|290040003*XL|290140003-L|290540002*XL|290640002",
                "prices": null
            }
        ]
    },
    "is_alcohol": 0,
    "price_master": 5.99,
    "selling_end": "9999-12-31 10:59:59",
    "display_price": "3.99",
    "opening_times": null,
    "first_layers": [
        {
            "image": {
                "mobile_thumbnail": "",
                "mobile_detail": "",
                "desktop_thumbnail": "",
                "desktop_detail": ""
            },
            "price_without_tax": 0,
            "price_master": 0,
            "active": 1,
            "uuid": "f247b4e9-cf87-47ab-acd5-3e6a3083709c",
            "point": 0,
            "tax_rate": 0,
            "second_layers": [
                {
                    "image": {
                        "mobile_thumbnail": "https://static.phdvasia.com/development/menu/first_layer/mobile_thumbnail_46bba1fa-91fd-4f4d-ac06-ddfccf909f0c.png",
                        "mobile_detail": "https://static.phdvasia.com/development/menu/first_layer/mobile_detail_d0375ab8-e587-434c-a823-d21ac52f5428.png",
                        "desktop_thumbnail": "https://static.phdvasia.com/development/menu/first_layer/desktop_thumbnail_3166f0ad-95d4-437a-a015-1c6e51d8b16b.png",
                        "desktop_detail": "https://static.phdvasia.com/development/menu/first_layer/desktop_detail_c35442f5-52b4-42d3-aa3d-eeda023b73ce.png"
                    },
                    "price_without_tax": 0,
                    "price_master": 0,
                    "second_id": 12317,
                    "active": 1,
                    "uuid": "53da8258-172e-48d2-95ce-b10772a6bcb7",
                    "point": 0,
                    "tax_rate": 0,
                    "sequence": 0,
                    "price": 0,
                    "name": "Pan",
                    "short_name": "Deep Pan",
                    "id": 496023,
                    "sku": "01",
                    "name_en": "Pan",
                    "main_description": "Our famously delicious thick-crust pizza"
                },
                {
                    "image": {
                        "mobile_thumbnail": "https://static.phdvasia.com/development/menu/first_layer/mobile_thumbnail_af9a1b06-bb29-42ba-91cf-8b38a3cef867.png",
                        "mobile_detail": "https://static.phdvasia.com/development/menu/first_layer/mobile_detail_fe969c2c-ea70-4846-b1bc-8ae998102860.png",
                        "desktop_thumbnail": "https://static.phdvasia.com/development/menu/first_layer/desktop_thumbnail_831d1db7-3fea-40ae-bcba-95c3d432fea2.png",
                        "desktop_detail": "https://static.phdvasia.com/development/menu/first_layer/desktop_detail_91bd9650-4d5f-48b9-b0d4-e39f21a703ed.png"
                    },
                    "price_without_tax": 0,
                    "price_master": 0,
                    "second_id": 12758,
                    "active": 1,
                    "uuid": "e182185a-a49b-4bb9-ba4e-e87064204617",
                    "point": 0,
                    "tax_rate": 0,
                    "sequence": 1,
                    "price": 0,
                    "name": "San Francisco Style",
                    "short_name": "San Francisco Style",
                    "id": 496024,
                    "sku": "08",
                    "name_en": "San Francisco Style",
                    "main_description": "Our new classic with a sourdough style base, hand stretched for a light and airy texture Our new classic with a sourdough style base, hand stretched for a light and airy texture Our new classic with a sourdough style base, hand stretched for a light and a"
                },
                {
                    "image": {
                        "mobile_thumbnail": "https://static.phdvasia.com/development/menu/first_layer/mobile_thumbnail_dfa85b6d-97d0-43da-8ee4-db457d4c6ed7.png",
                        "mobile_detail": "https://static.phdvasia.com/development/menu/first_layer/mobile_detail_591c8ee9-e994-4527-886e-05146f8035a9.png",
                        "desktop_thumbnail": "https://static.phdvasia.com/development/menu/first_layer/desktop_thumbnail_b8616790-404e-4b95-b10a-ae8554cc74cd.png",
                        "desktop_detail": "https://static.phdvasia.com/development/menu/first_layer/desktop_detail_7cef9178-d2ca-4bc7-8088-e67db93d8ecd.png"
                    },
                    "price_without_tax": 0,
                    "price_master": 0,
                    "second_id": 12319,
                    "active": 1,
                    "uuid": "40783cbe-2dee-45e2-a578-23cb4976bd80",
                    "point": 0,
                    "tax_rate": 0,
                    "sequence": 2,
                    "price": 0,
                    "name": "Thin 'n Crispy",
                    "short_name": "Thin 'n Crispy",
                    "id": 496025,
                    "sku": "03",
                    "name_en": "Thin 'n Crispy",
                    "main_description": "A thin base with a thick crust and Garlic Sprinkles (not suitable for vegans)"
                }
            ],
            "sequence": 0,
            "first_id": 144,
            "price": 0,
            "name": "Extra Large",
            "short_name": "Extra Large",
            "id": 140436,
            "sku": "XL",
            "name_en": "Extra Large",
            "main_description": "12\" Good for 6-8 UAT passed"
        },
        {
            "image": {
                "mobile_thumbnail": "",
                "mobile_detail": "",
                "desktop_thumbnail": "",
                "desktop_detail": ""
            },
            "price_without_tax": 0,
            "price_master": 4.99,
            "active": 1,
            "uuid": "cf4e3ceb-4e33-407b-977b-ecaef8f0726c",
            "point": 0,
            "tax_rate": 0,
            "second_layers": [
                {
                    "image": {
                        "mobile_thumbnail": "https://static.phdvasia.com/development/menu/first_layer/mobile_thumbnail_dfa85b6d-97d0-43da-8ee4-db457d4c6ed7.png",
                        "mobile_detail": "https://static.phdvasia.com/development/menu/first_layer/mobile_detail_591c8ee9-e994-4527-886e-05146f8035a9.png",
                        "desktop_thumbnail": "https://static.phdvasia.com/development/menu/first_layer/desktop_thumbnail_b8616790-404e-4b95-b10a-ae8554cc74cd.png",
                        "desktop_detail": "https://static.phdvasia.com/development/menu/first_layer/desktop_detail_7cef9178-d2ca-4bc7-8088-e67db93d8ecd.png"
                    },
                    "price_without_tax": 0,
                    "price_master": 2.99,
                    "second_id": 12319,
                    "active": 1,
                    "uuid": "bc74868a-f0b2-40e7-a103-ddb7965ef674",
                    "point": 0,
                    "tax_rate": 0,
                    "sequence": 0,
                    "price": 2.99,
                    "name": "Thin 'n Crispy",
                    "short_name": "Thin 'n Crispy",
                    "id": 496030,
                    "sku": "03",
                    "name_en": "Thin 'n Crispy",
                    "main_description": "A thin base with a thick crust and Garlic Sprinkles (not suitable for vegans)"
                }
            ],
            "sequence": 1,
            "first_id": 142,
            "price": 4.99,
            "name": "Large",
            "short_name": "large",
            "id": 140439,
            "sku": "L",
            "name_en": "Large",
            "main_description": "10\" Good for 4-6 UAT passed"
        }
    ],
    "display_end": "9999-12-31 10:59:59",
    "marketing_description": "",
    "hide": 0,
    "disposition": [
        "C",
        "D",
        "R"
    ],
    "product_type": 0,
    "min_price": 5.99,
    "allow_type": [],
    "category": {
        "image": {},
        "sequence": 0,
        "name_seo": "Pizza Reg",
        "level": 0,
        "name": {
            "en": "Pizza Reg"
        },
        "description": null,
        "short_name": "Pizza Reg",
        "id": 468,
        "category_type_id": 0,
        "sku": "2012",
        "uuid": "ad449dce-1287-4610-91af-735d92f5c62d"
    },
    "friendly_seo_name": "classic-veggie-ann-test",
    "name_en": "Classic Veggie - Ann test",
    "single_types": [],
    "special_dates": []
};

const areEqual = compareJsonObjects(json1, json2);
console.log(`The JSON objects are ${areEqual ? 'equal' : 'not equal'}.`);
