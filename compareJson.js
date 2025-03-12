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
        console.log("json1",item1[key])
        console.log("json2",item2[key])
        return false;
      }
    } else {
      if (JSON.stringify(item1[key]) !== JSON.stringify(item2[key])) {
        console.log(key)
        console.log("json1",item1[key])
        console.log("json2",item2[key])
        return false;
      }
    }
  }

  return true;
}

// Example usage:
const json1 = {
  allow_type: [2],
  id: 85404,
  uuid: '7595f22f-6959-4834-ab3f-0de8ae2c64da',
  sku: 'D3X-21003',
  name: 'Apricot Chicken Deluxe Delivery',
  name_en: 'Apricot Chicken Deluxe Delivery',
  name_seo: 'Apricot Chicken',
  friendly_seo_name: '',
  image: {
    desktop_thumbnail:
      'https://static.phdvasia.com/nz/menu/single/desktop_thumbnail_a642585d-b278-4a26-8ebe-df999b526730.jpg',
    desktop_detail:
      'https://static.phdvasia.com/nz/menu/single/desktop_detail_ff9a6926-a7ec-49c3-8b02-561fe3e8ee0f.jpg',
    mobile_thumbnail:
      'https://static.phdvasia.com/nz/menu/single/mobile_thumbnail_0aa669c9-97e7-4057-a69a-204b5eacb2d9.jpg',
    mobile_detail:
      'https://static.phdvasia.com/nz/menu/single/mobile_detail_2099dca3-a90d-4212-a38b-78cfdb1ba251.jpg',
  },
  marketing_description: '100% chicken breast, veggies and apricot sauce.',
  main_description:
    'Laced with our special apricot drizzle, this luscious pizza brings together tender chicken, green capsicum, red onion and the subtle creaminess of mozzarella.',
  t_and_c: '',
  piece: 1,
  customize: {
    tag: 'classic',
    hide_without_store: false,
    'Hide item for non-localise User': false,
    promote_for_download_app: false,
    deep_link_download_app: 'https://pizzahutnewzealand.app.link/8FDEHmS1wyb',
  },
  display_start: '2019-06-30 12:00:00',
  display_end: '9999-12-31 10:59:59',
  selling_start: '2019-06-30 12:00:00',
  selling_end: '9999-12-31 10:59:59',
  duration_date: 0,
  price: 10.99,
  price_without_tax: 0,
  price_master: 10.99,
  point: 0,
  tax_rate: 0,
  first_layers: [
    {
      id: 89859,
      uuid: '313f48a6-b81e-4c74-aedc-5b8e0c1ddb08',
      name_en: 'Large',
      name: 'Large',
      sku: 'L',
      image: {
        desktop_thumbnail: '',
        desktop_detail: '',
        mobile_thumbnail: '',
        mobile_detail: '',
      },
      active: 1,
      price: 0,
      price_without_tax: 0,
      price_master: 0,
      point: 0,
      tax_rate: 0,
      short_name: 'large',
      sequence: 0,
      second_layers: [
        {
          id: 318437,
          uuid: 'f249d4ce-e320-42fe-94f9-5bb98cd4fba7',
          name_en: 'Cheesy Bites',
          name: 'Cheesy Bites',
          sku: '220160004',
          image: null,
          active: 1,
          price: 19.89,
          price_without_tax: 0,
          price_master: 19.89,
          point: 0,
          tax_rate: 0,
          short_name: 'Cheesy Bites',
          sequence: 3,
          second_id: 12323,
        },
      ],
      first_id: 142,
      main_description: '10" Good for 4-6 UAT passed',
    },
  ],
  toppings: { default: null, extra: null },
  single_types: [
    {
      client: 2,
      id: 738,
      uuid: '32fe7fd1-fa34-4293-83eb-82ed728f7a3e',
      sku: '',
      name: { en: 'Classic' },
      description: null,
      name_seo: '',
      image: {
        banner:
          'https://static.phdvasia.com/development/menu/single_type/banner_ee4b91ed-7b11-4489-b768-9f0b8b3775ee.png',
      },
      active: 1,
      created_at: '2019-08-15 02:49:10',
      updated_at: '2023-10-25 06:40:22',
      sequence: 10,
      pivot: { single_id: 85404, single_type_id: 738 },
    },
  ],
  menu_attributes: [],
  display_price: '18.99',
  min_price: 10.99,
  min_point: 0,
  product_type: 0,
  is_combo: 0,
  only_lunch: 0,
  day_of_hut: 0,
  special_dates: [],
  opening_times: null,
  closing_times: null,
  exception_closing: null,
  exception_opening: null,
  outlet_timezone: 'Pacific/Auckland',
  display_categories: [
    {
      uuid: 'dad62e24-baec-44e0-a13f-55651fd7d036',
      name: 'Test 1',
      name_en: 'Test 1',
      short_name: 'Test 1',
      slug: 'test-1',
    },
  ],
  discount: 0,
  type: 0,
  max_topping: 10,
  max_extra: 6,
  min_extra: 0,
  disposition: ['D'],
  is_donation: 0,
  min_total: 0,
  max_total: 99999999,
  category: {
    id: 456,
    uuid: '7d895928-b31a-4465-9676-8b797376fa36',
    category_type_id: 0,
    sku: '2010',
    name: { en: 'Pizza Large' },
    name_seo: 'Pizza Large',
    image: {},
    sequence: 0,
    level: 0,
    description: null,
    short_name: 'Pizza Large',
  },
  short_name: 'Apricot Chicken Delivery',
  allow_condiment: 0,
  hide: 0,
  is_alcohol: 0,
  max_remove: 3,
};
const json2 = {
  only_lunch: 0,
  min_point: 0,
  min_total: 0,
  t_and_c: '',
  discount: 0,
  exception_opening: null,
  type: 0,
  uuid: '7595f22f-6959-4834-ab3f-0de8ae2c64da',
  tax_rate: 0,
  exception_closing: null,
  day_of_hut: 0,
  name_seo: 'Apricot Chicken',
  price: 10.99,
  id: 85404,
  sku: 'D3X-21003',
  outlet_timezone: 'Pacific/Auckland',
  max_topping: 10,
  image: {
    mobile_thumbnail:
      'https://static.phdvasia.com/nz/menu/single/mobile_thumbnail_0aa669c9-97e7-4057-a69a-204b5eacb2d9.jpg',
    mobile_detail:
      'https://static.phdvasia.com/nz/menu/single/mobile_detail_2099dca3-a90d-4212-a38b-78cfdb1ba251.jpg',
    desktop_thumbnail:
      'https://static.phdvasia.com/nz/menu/single/desktop_thumbnail_a642585d-b278-4a26-8ebe-df999b526730.jpg',
    desktop_detail:
      'https://static.phdvasia.com/nz/menu/single/desktop_detail_ff9a6926-a7ec-49c3-8b02-561fe3e8ee0f.jpg',
  },
  price_without_tax: 0,
  duration_date: 0,
  max_extra: 6,
  is_combo: 0,
  min_extra: 0,
  piece: 1,
  display_start: '2019-06-30 12:00:00',
  selling_start: '2019-06-30 12:00:00',
  name: 'Apricot Chicken Deluxe Delivery',
  display_categories: [
    {
      name: 'Test 1',
      short_name: 'Test 1',
      uuid: 'dad62e24-baec-44e0-a13f-55651fd7d036',
      slug: 'test-1',
      name_en: 'Test 1',
    },
  ],
  short_name: 'Apricot Chicken Delivery',
  is_donation: 0,
  max_total: 99999999,
  menu_attributes: [],
  max_remove: 3,
  customize: {
    promote_for_download_app: false,
    deep_link_download_app: 'https://pizzahutnewzealand.app.link/8FDEHmS1wyb',
    hide_without_store: false,
    tag: 'classic',
    'Hide item for non-localise User': false,
  },
  point: 0,
  main_description:
    'Laced with our special apricot drizzle, this luscious pizza brings together tender chicken, green capsicum, red onion and the subtle creaminess of mozzarella.',
  closing_times: null,
  allow_condiment: 0,
  toppings: { default: null, extra: null },
  is_alcohol: 0,
  price_master: 10.99,
  selling_end: '9999-12-31 10:59:59',
  display_price: '18.99',
  opening_times: null,
  first_layers: [
    {
      image: {
        mobile_thumbnail: '',
        mobile_detail: '',
        desktop_thumbnail: '',
        desktop_detail: '',
      },
      price_without_tax: 0,
      price_master: 0,
      active: 1,
      uuid: '313f48a6-b81e-4c74-aedc-5b8e0c1ddb08',
      point: 0,
      tax_rate: 0,
      second_layers: [
        {
          image: null,
          price_without_tax: 0,
          price_master: 19.89,
          second_id: 12323,
          active: 1,
          uuid: 'f249d4ce-e320-42fe-94f9-5bb98cd4fba7',
          point: 0,
          tax_rate: 0,
          sequence: 3,
          price: 19.89,
          name: 'Cheesy Bites',
          short_name: 'Cheesy Bites',
          id: 318437,
          sku: '220160004',
          name_en: 'Cheesy Bites',
        },
      ],
      sequence: 0,
      first_id: 142,
      price: 0,
      name: 'Large',
      short_name: 'large',
      id: 89859,
      sku: 'L',
      name_en: 'Large',
      main_description: '10" Good for 4-6 UAT passed',
    },
  ],
  display_end: '9999-12-31 10:59:59',
  marketing_description: '100% chicken breast, veggies and apricot sauce.',
  hide: 0,
  disposition: ['D'],
  product_type: 0,
  min_price: 10.99,
  allow_type: [2],
  category: {
    image: {},
    sequence: 0,
    name_seo: 'Pizza Large',
    level: 0,
    name: { en: 'Pizza Large' },
    description: null,
    short_name: 'Pizza Large',
    id: 456,
    category_type_id: 0,
    sku: '2010',
    uuid: '7d895928-b31a-4465-9676-8b797376fa36',
  },
  friendly_seo_name: '',
  name_en: 'Apricot Chicken Deluxe Delivery',
  single_types: [
    {
      image: {
        banner:
          'https://static.phdvasia.com/development/menu/single_type/banner_ee4b91ed-7b11-4489-b768-9f0b8b3775ee.png',
      },
      description: null,
      active: 1,
      created_at: '2019-08-15 02:49:10',
      uuid: '32fe7fd1-fa34-4293-83eb-82ed728f7a3e',
      sequence: 10,
      name_seo: '',
      updated_at: '2023-10-25 06:40:22',
      name: { en: 'Classic' },
      client: 2,
      pivot: { single_type_id: 738, single_id: 85404 },
      id: 738,
      sku: '',
    },
  ],
  special_dates: [],
};

const areEqual = compareJsonObjects(json1, json2);
console.log(`The JSON objects are ${areEqual ? 'equal' : 'not equal'}.`);
