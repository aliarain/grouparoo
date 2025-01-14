const nock = require('nock');

nock('https://d3v-grouparoo.zendesk.com:443', {"encodedQueryParams":true})
  .get('/api/v2/user_fields.json')
  .once().reply(200, {"user_fields":[{"url":"https://d3v-grouparoo.zendesk.com/api/v2/user_fields/360001266052.json","id":360001266052,"type":"text","key":"text_field","title":"Text Field","description":"","raw_title":"Text Field","raw_description":"","position":0,"active":true,"system":false,"regexp_for_validation":null,"created_at":"2020-08-15T01:33:08Z","updated_at":"2020-08-15T01:33:08Z"},{"url":"https://d3v-grouparoo.zendesk.com/api/v2/user_fields/360001266072.json","id":360001266072,"type":"textarea","key":"multiline_field","title":"Multiline Field","description":"","raw_title":"Multiline Field","raw_description":"","position":1,"active":true,"system":false,"regexp_for_validation":null,"created_at":"2020-08-15T01:33:30Z","updated_at":"2020-08-15T01:33:30Z"},{"url":"https://d3v-grouparoo.zendesk.com/api/v2/user_fields/360001266092.json","id":360001266092,"type":"integer","key":"numeric_field","title":"Numeric Field","description":"","raw_title":"Numeric Field","raw_description":"","position":2,"active":true,"system":false,"regexp_for_validation":null,"created_at":"2020-08-15T01:33:39Z","updated_at":"2020-08-15T01:33:39Z"},{"url":"https://d3v-grouparoo.zendesk.com/api/v2/user_fields/360001274351.json","id":360001274351,"type":"decimal","key":"decimal_field","title":"Decimal Field","description":"","raw_title":"Decimal Field","raw_description":"","position":3,"active":true,"system":false,"regexp_for_validation":null,"created_at":"2020-08-15T01:33:51Z","updated_at":"2020-08-15T01:33:51Z"},{"url":"https://d3v-grouparoo.zendesk.com/api/v2/user_fields/360001274371.json","id":360001274371,"type":"checkbox","key":"checkbox_field","title":"Checkbox Field","description":"","raw_title":"Checkbox Field","raw_description":"","position":4,"active":true,"system":false,"regexp_for_validation":null,"created_at":"2020-08-15T01:34:33Z","updated_at":"2020-08-15T01:34:33Z","tag":"checkedbox"},{"url":"https://d3v-grouparoo.zendesk.com/api/v2/user_fields/360001274391.json","id":360001274391,"type":"date","key":"date_field","title":"Date Field","description":"","raw_title":"Date Field","raw_description":"","position":5,"active":true,"system":false,"regexp_for_validation":"\\A([0-9]{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])\\z","created_at":"2020-08-15T01:34:55Z","updated_at":"2020-08-15T01:34:55Z"},{"url":"https://d3v-grouparoo.zendesk.com/api/v2/user_fields/360001274411.json","id":360001274411,"type":"regexp","key":"regex_field","title":"Regex Field","description":"","raw_title":"Regex Field","raw_description":"","position":6,"active":true,"system":false,"regexp_for_validation":"[a-z]","created_at":"2020-08-15T01:35:27Z","updated_at":"2020-08-15T01:35:27Z"},{"url":"https://d3v-grouparoo.zendesk.com/api/v2/user_fields/360001266112.json","id":360001266112,"type":"dropdown","key":"dropdown_field","title":"Dropdown Field","description":"","raw_title":"Dropdown Field","raw_description":"","position":7,"active":true,"system":false,"regexp_for_validation":null,"created_at":"2020-08-15T01:36:22Z","updated_at":"2020-08-15T01:36:22Z","custom_field_options":[{"id":360002500372,"name":"apple","raw_name":"apple","value":"apple"},{"id":360002500392,"name":"pear","raw_name":"pear","value":"pear"},{"id":360002500412,"name":"banana","raw_name":"banana","value":"banana"}]}],"next_page":null,"previous_page":null,"count":8}, [
  'Date',
  'Wed, 19 Aug 2020 18:20:18 GMT',
  'Content-Type',
  'application/json; charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'keep-alive',
  'Set-Cookie',
  '__cfduid=de9f012b9112bbeb968573fbf8b644bc51597861217; expires=Fri, 18-Sep-20 18:20:17 GMT; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; SameSite=Lax',
  'X-Zendesk-API-Version',
  'v2',
  'X-Zendesk-Application-Version',
  'v6393.12',
  'X-Frame-Options',
  'SAMEORIGIN',
  'ETag',
  'W/"c8499097a48a77b2adbb6338531be68e"',
  'Cache-Control',
  'max-age=0, private, must-revalidate',
  'X-Rate-Limit',
  '700',
  'X-Rate-Limit-Remaining',
  '699',
  'Strict-Transport-Security',
  'max-age=31536000;',
  'X-Zendesk-Origin-Server',
  'classic-app-server-56f7c8cd69-r62b2',
  'X-Request-Id',
  '5c55e3436f70ed5f-SJC',
  'X-Runtime',
  '0.220276',
  'X-Zendesk-Zorg',
  'yes',
  'X-Request-ID',
  '5c55e3436f70ed5f-SJC',
  'X-Content-Type-Options',
  'nosniff',
  'CF-Cache-Status',
  'DYNAMIC',
  'cf-request-id',
  '04a98c5e230000ed5f68bbe200000001',
  'Expect-CT',
  'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
  'Set-Cookie',
  '__cfruid=d977141ff66ad259fc95078e57d318db50fcbe7b-1597861218; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None',
  'Server',
  'cloudflare',
  'CF-RAY',
  '5c55e3436f70ed5f-SJC'
]);
nock('https://d3v-grouparoo.zendesk.com:443', {"encodedQueryParams":true})
  .get('/api/v2/user_fields.json')
  .once().reply(200, {"user_fields":[{"url":"https://d3v-grouparoo.zendesk.com/api/v2/user_fields/360001266052.json","id":360001266052,"type":"text","key":"text_field","title":"Text Field","description":"","raw_title":"Text Field","raw_description":"","position":0,"active":true,"system":false,"regexp_for_validation":null,"created_at":"2020-08-15T01:33:08Z","updated_at":"2020-08-15T01:33:08Z"},{"url":"https://d3v-grouparoo.zendesk.com/api/v2/user_fields/360001266072.json","id":360001266072,"type":"textarea","key":"multiline_field","title":"Multiline Field","description":"","raw_title":"Multiline Field","raw_description":"","position":1,"active":true,"system":false,"regexp_for_validation":null,"created_at":"2020-08-15T01:33:30Z","updated_at":"2020-08-15T01:33:30Z"},{"url":"https://d3v-grouparoo.zendesk.com/api/v2/user_fields/360001266092.json","id":360001266092,"type":"integer","key":"numeric_field","title":"Numeric Field","description":"","raw_title":"Numeric Field","raw_description":"","position":2,"active":true,"system":false,"regexp_for_validation":null,"created_at":"2020-08-15T01:33:39Z","updated_at":"2020-08-15T01:33:39Z"},{"url":"https://d3v-grouparoo.zendesk.com/api/v2/user_fields/360001274351.json","id":360001274351,"type":"decimal","key":"decimal_field","title":"Decimal Field","description":"","raw_title":"Decimal Field","raw_description":"","position":3,"active":true,"system":false,"regexp_for_validation":null,"created_at":"2020-08-15T01:33:51Z","updated_at":"2020-08-15T01:33:51Z"},{"url":"https://d3v-grouparoo.zendesk.com/api/v2/user_fields/360001274371.json","id":360001274371,"type":"checkbox","key":"checkbox_field","title":"Checkbox Field","description":"","raw_title":"Checkbox Field","raw_description":"","position":4,"active":true,"system":false,"regexp_for_validation":null,"created_at":"2020-08-15T01:34:33Z","updated_at":"2020-08-15T01:34:33Z","tag":"checkedbox"},{"url":"https://d3v-grouparoo.zendesk.com/api/v2/user_fields/360001274391.json","id":360001274391,"type":"date","key":"date_field","title":"Date Field","description":"","raw_title":"Date Field","raw_description":"","position":5,"active":true,"system":false,"regexp_for_validation":"\\A([0-9]{4})-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])\\z","created_at":"2020-08-15T01:34:55Z","updated_at":"2020-08-15T01:34:55Z"},{"url":"https://d3v-grouparoo.zendesk.com/api/v2/user_fields/360001274411.json","id":360001274411,"type":"regexp","key":"regex_field","title":"Regex Field","description":"","raw_title":"Regex Field","raw_description":"","position":6,"active":true,"system":false,"regexp_for_validation":"[a-z]","created_at":"2020-08-15T01:35:27Z","updated_at":"2020-08-15T01:35:27Z"},{"url":"https://d3v-grouparoo.zendesk.com/api/v2/user_fields/360001266112.json","id":360001266112,"type":"dropdown","key":"dropdown_field","title":"Dropdown Field","description":"","raw_title":"Dropdown Field","raw_description":"","position":7,"active":true,"system":false,"regexp_for_validation":null,"created_at":"2020-08-15T01:36:22Z","updated_at":"2020-08-15T01:36:22Z","custom_field_options":[{"id":360002500372,"name":"apple","raw_name":"apple","value":"apple"},{"id":360002500392,"name":"pear","raw_name":"pear","value":"pear"},{"id":360002500412,"name":"banana","raw_name":"banana","value":"banana"}]}],"next_page":null,"previous_page":null,"count":8}, [
  'Date',
  'Wed, 19 Aug 2020 18:20:18 GMT',
  'Content-Type',
  'application/json; charset=UTF-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'keep-alive',
  'Set-Cookie',
  '__cfduid=d5d1de9082aa904eeab5c566a0795a1ee1597861218; expires=Fri, 18-Sep-20 18:20:18 GMT; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; SameSite=Lax',
  'X-Zendesk-API-Version',
  'v2',
  'X-Zendesk-Application-Version',
  'v6393.12',
  'X-Frame-Options',
  'SAMEORIGIN',
  'ETag',
  'W/"c8499097a48a77b2adbb6338531be68e"',
  'Cache-Control',
  'max-age=0, private, must-revalidate',
  'X-Rate-Limit',
  '700',
  'X-Rate-Limit-Remaining',
  '698',
  'Strict-Transport-Security',
  'max-age=31536000;',
  'X-Zendesk-Origin-Server',
  'classic-app-server-56f7c8cd69-8lt6n',
  'X-Request-Id',
  '5c55e345ebaaed93-SJC',
  'X-Runtime',
  '0.246371',
  'X-Zendesk-Zorg',
  'yes',
  'X-Request-ID',
  '5c55e345ebaaed93-SJC',
  'X-Content-Type-Options',
  'nosniff',
  'CF-Cache-Status',
  'DYNAMIC',
  'cf-request-id',
  '04a98c5fad0000ed938738d200000001',
  'Expect-CT',
  'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
  'Set-Cookie',
  '__cfruid=d977141ff66ad259fc95078e57d318db50fcbe7b-1597861218; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None',
  'Server',
  'cloudflare',
  'CF-RAY',
  '5c55e345ebaaed93-SJC'
]);