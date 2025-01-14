const nock = require("nock");

nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Caio",
          id: "ac1f33e2-abdc-45d6-b221-8cee3f3fc659",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-02-16T22:26:20Z",
          updated_at: "2021-02-16T22:26:49Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/ac1f33e2-abdc-45d6-b221-8cee3f3fc659",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:23:08 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "661",
      "Connection",
      "close",
      "x-amzn-requestid",
      "7070cca7-a967-4896-8aba-1d1bb564dc25",
      "x-amz-apigw-id",
      "a3Q8_GztvHcF06g=",
      "x-amzn-trace-id",
      "Root=1-602c61ec-23c252f23ab424e70ad9da90;Sampled=0",
      "x-envoy-upstream-service-time",
      "125",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "184",
      "x-ratelimit-reset",
      "52",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'lucas.nogueira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:23:09 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "f6ba89db-cadc-4e5a-9dae-96e36d68cb27",
      "x-amz-apigw-id",
      "a3Q9EGBsPHcFu0w=",
      "x-amzn-trace-id",
      "Root=1-602c61ed-354d5f892c57021338b03e1b;Sampled=0",
      "x-envoy-upstream-service-time",
      "123",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "182",
      "x-ratelimit-reset",
      "51",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:23:09 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "e2ac4fcc-58b9-41fc-bc91-4cd8c826ae18",
      "x-amz-apigw-id",
      "a3Q9JECZvHcF_SA=",
      "x-amzn-trace-id",
      "Root=1-602c61ed-5f2a909201fb6cda2b783222;Sampled=0",
      "x-envoy-upstream-service-time",
      "206",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "181",
      "x-ratelimit-reset",
      "51",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'carlos.solimoes@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:23:10 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "4da6ea31-3eaf-4d23-9027-eb821184420e",
      "x-amz-apigw-id",
      "a3Q9PG5QPHcFeCw=",
      "x-amzn-trace-id",
      "Root=1-602c61ee-2d56aa083be269cf5aedac6b;Sampled=0",
      "x-envoy-upstream-service-time",
      "134",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "180",
      "x-ratelimit-reset",
      "50",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'jake.jill@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:23:10 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "7f7f013c-5ccd-4b9c-94a1-a5f942f33425",
      "x-amz-apigw-id",
      "a3Q9UHpfPHcFpJA=",
      "x-amzn-trace-id",
      "Root=1-602c61ee-438f72be5e5c92ed28668600;Sampled=0",
      "x-envoy-upstream-service-time",
      "124",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "179",
      "x-ratelimit-reset",
      "50",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/contacts")
  .query({ ids: "ac1f33e2-abdc-45d6-b221-8cee3f3fc659" })
  .once()
  .reply(202, { job_id: "1ea19fde-5752-4cd1-8756-0452e4eba1d4" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:23:11 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "77e19c63-3427-44cb-8562-f64d2db71f69",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3Q9ZF7NvHcFshw=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c61ef-35c403920a0dc2bf4c42506e;Sampled=0",
    "x-envoy-upstream-service-time",
    "457",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "49",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:23:12 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "499",
      "Connection",
      "close",
      "x-amzn-requestid",
      "1ae26618-45e7-4075-8c8d-2711d02f1238",
      "x-amz-apigw-id",
      "a3Q9iF9ovHcFuig=",
      "x-amzn-trace-id",
      "Root=1-602c61f0-102d182c403472dc44b54709;Sampled=0",
      "x-envoy-upstream-service-time",
      "125",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "48",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:23:12 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "499",
      "Connection",
      "close",
      "x-amzn-requestid",
      "ab230f37-2075-414e-82cb-908012b8819b",
      "x-amz-apigw-id",
      "a3Q9nGT7vHcFXmQ=",
      "x-amzn-trace-id",
      "Root=1-602c61f0-2abe2a870c6fb29938921782;Sampled=0",
      "x-envoy-upstream-service-time",
      "88",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "48",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:23:13 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "499",
      "Connection",
      "close",
      "x-amzn-requestid",
      "ddeaa3ee-cbc3-4a74-82ff-dbe20b1eb6ea",
      "x-amz-apigw-id",
      "a3Q9rENUvHcFttA=",
      "x-amzn-trace-id",
      "Root=1-602c61f1-1291451e27acea812ef8fe4c;Sampled=0",
      "x-envoy-upstream-service-time",
      "96",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "597",
      "x-ratelimit-reset",
      "47",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:23:13 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "499",
      "Connection",
      "close",
      "x-amzn-requestid",
      "6adf60f4-16e5-47ca-a84b-f3115008b1d7",
      "x-amz-apigw-id",
      "a3Q9wE2rPHcFUdg=",
      "x-amzn-trace-id",
      "Root=1-602c61f1-17fdaadd21830e90475acda1;Sampled=0",
      "x-envoy-upstream-service-time",
      "86",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "596",
      "x-ratelimit-reset",
      "47",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:23:44 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "cb57d08b-6cca-4993-9c80-e295d84c6cee",
      "x-amz-apigw-id",
      "a3RCiFX5PHcFaqQ=",
      "x-amzn-trace-id",
      "Root=1-602c6210-1c9907f23b897ea345381a07;Sampled=0",
      "x-envoy-upstream-service-time",
      "505",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "172",
      "x-ratelimit-reset",
      "16",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:23:45 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "a12704b9-1043-4736-ae64-75572b75a89a",
      "x-amz-apigw-id",
      "a3RCrFFYPHcFl2g=",
      "x-amzn-trace-id",
      "Root=1-602c6211-6d2a1501495e98cc1bd7b4a3;Sampled=0",
      "x-envoy-upstream-service-time",
      "114",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "171",
      "x-ratelimit-reset",
      "15",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [
      {
        custom_fields: {},
        email: "caio.silveira@mailinator.com",
        first_name: "Caio",
      },
    ],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "b2ce72c9-0604-4a13-886a-d0250592aa9d" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:23:46 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "2a9f701a-5e61-4158-8545-a71b57d28f67",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3RCwGbOvHcFcag=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c6211-45886db93a3b8b6c49f409d7;Sampled=0",
    "x-envoy-upstream-service-time",
    "655",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "15",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Caio",
          id: "dd3827bb-b952-4f9a-84d9-491c698b6a28",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-02-17T00:23:45Z",
          updated_at: "2021-02-17T00:24:14Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/dd3827bb-b952-4f9a-84d9-491c698b6a28",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:24:46 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "661",
      "Connection",
      "close",
      "x-amzn-requestid",
      "42fb434e-0c6a-45f3-9c09-07f348517cba",
      "x-amz-apigw-id",
      "a3RMUF9HPHcFjeQ=",
      "x-amzn-trace-id",
      "Root=1-602c624e-155036be2469d53b3e2bb15b;Sampled=0",
      "x-envoy-upstream-service-time",
      "261",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "178",
      "x-ratelimit-reset",
      "14",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Caio",
          id: "dd3827bb-b952-4f9a-84d9-491c698b6a28",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-02-17T00:23:45Z",
          updated_at: "2021-02-17T00:24:14Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/dd3827bb-b952-4f9a-84d9-491c698b6a28",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:24:47 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "661",
      "Connection",
      "close",
      "x-amzn-requestid",
      "66baad60-ff27-424e-99a0-31b14058efb4",
      "x-amz-apigw-id",
      "a3RMaHwqPHcFqDA=",
      "x-amzn-trace-id",
      "Root=1-602c624f-394c967c4529c32b2a1abeb7;Sampled=0",
      "x-envoy-upstream-service-time",
      "121",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "176",
      "x-ratelimit-reset",
      "13",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [
      {
        custom_fields: {},
        email: "caio.silveira@mailinator.com",
        first_name: "Caio",
        last_name: "Silveira",
        phone_number: "+5583999999999",
      },
    ],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "5d85b2c5-a209-4876-afe9-0275fd5b46fa" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:24:48 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "4d04120a-76f8-4729-ab48-a580c53087ec",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3RMfED-PHcFqpA=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c624f-6e8108822d4a75e50d7a7606;Sampled=0",
    "x-envoy-upstream-service-time",
    "508",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "13",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Caio",
          id: "dd3827bb-b952-4f9a-84d9-491c698b6a28",
          last_name: "Silveira",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999999",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-02-17T00:23:45Z",
          updated_at: "2021-02-17T00:25:17Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/dd3827bb-b952-4f9a-84d9-491c698b6a28",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:25:49 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "683",
      "Connection",
      "close",
      "x-amzn-requestid",
      "ff330909-c6b3-4b08-9591-ed171ec317fa",
      "x-amz-apigw-id",
      "a3RWCGF7PHcFmGw=",
      "x-amzn-trace-id",
      "Root=1-602c628c-5216c24322b947e17138e579;Sampled=0",
      "x-envoy-upstream-service-time",
      "281",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "179",
      "x-ratelimit-reset",
      "12",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Caio",
          id: "dd3827bb-b952-4f9a-84d9-491c698b6a28",
          last_name: "Silveira",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999999",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-02-17T00:23:45Z",
          updated_at: "2021-02-17T00:25:17Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/dd3827bb-b952-4f9a-84d9-491c698b6a28",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:25:49 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "683",
      "Connection",
      "close",
      "x-amzn-requestid",
      "a3044ac9-9306-4273-ae76-983bde617a15",
      "x-amz-apigw-id",
      "a3RWJEIBvHcFbXg=",
      "x-amzn-trace-id",
      "Root=1-602c628d-0c5d1ad112e9189d0367aecd;Sampled=0",
      "x-envoy-upstream-service-time",
      "154",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "178",
      "x-ratelimit-reset",
      "11",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:25:50 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "68bfcb64-553c-4c5f-a631-dc84b8fe1edc",
      "x-amz-apigw-id",
      "a3RWPFIsoAMF80w=",
      "x-amzn-trace-id",
      "Root=1-602c628e-3afbc8891e94f4a218d90d67;Sampled=0",
      "x-envoy-upstream-service-time",
      "92",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "10",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:25:50 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "aee8e0ca-f57b-46c5-afe9-3ef27bdd4ccc",
      "x-amz-apigw-id",
      "a3RWVHyWoAMFbpQ=",
      "x-amzn-trace-id",
      "Root=1-602c628e-5377d3a3389dce545fb3379c;Sampled=0",
      "x-envoy-upstream-service-time",
      "48",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "10",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:25:51 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "9f9ed269-331d-44f7-bbad-3c6e22b2a2b2",
      "x-amz-apigw-id",
      "a3RWaFDEoAMFgnQ=",
      "x-amzn-trace-id",
      "Root=1-602c628f-7638eed875abde16015dd841;Sampled=0",
      "x-envoy-upstream-service-time",
      "23",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "597",
      "x-ratelimit-reset",
      "9",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:25:51 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "f020bd79-86e8-4f9e-993b-eff6a3c5e40f",
      "x-amz-apigw-id",
      "a3RWfFytoAMF_Jg=",
      "x-amzn-trace-id",
      "Root=1-602c628f-07631c6a4290a51c79ca4d50;Sampled=0",
      "x-envoy-upstream-service-time",
      "24",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "596",
      "x-ratelimit-reset",
      "9",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:25:52 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "dad1d19b-542b-4ec5-a118-7800cfea13f6",
      "x-amz-apigw-id",
      "a3RWkEnFIAMFzeg=",
      "x-amzn-trace-id",
      "Root=1-602c6290-060a2847105501424528d420;Sampled=0",
      "x-envoy-upstream-service-time",
      "101",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "595",
      "x-ratelimit-reset",
      "8",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [
      {
        custom_fields: {
          e2_T: "text",
          e3_N: 15.5,
          e4_D: "2021-02-11T23:03:03.000Z",
        },
        email: "caio.silveira@mailinator.com",
        first_name: "Evan",
        phone_number: "+5583999999998",
      },
    ],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "175471af-a086-471e-b9f2-bb5989e2dc2a" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:25:53 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "18a63e08-7ac4-4e75-ae78-afff9ef355e2",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3RWqFeDvHcFhlw=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c6290-6052e3f17914fd5e05a41f9e;Sampled=0",
    "x-envoy-upstream-service-time",
    "488",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "8",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Evan",
          id: "dd3827bb-b952-4f9a-84d9-491c698b6a28",
          last_name: "Silveira",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999998",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-02-17T00:23:45Z",
          updated_at: "2021-02-17T00:26:22Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/dd3827bb-b952-4f9a-84d9-491c698b6a28",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:26:54 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "758",
      "Connection",
      "close",
      "x-amzn-requestid",
      "66075bf7-1590-4fa6-a599-75c54ab54941",
      "x-amz-apigw-id",
      "a3RgNGJyvHcFaWw=",
      "x-amzn-trace-id",
      "Root=1-602c62cd-115c0d6e75f2beb26159ad84;Sampled=0",
      "x-envoy-upstream-service-time",
      "229",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "169",
      "x-ratelimit-reset",
      "7",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Evan",
          id: "dd3827bb-b952-4f9a-84d9-491c698b6a28",
          last_name: "Silveira",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999998",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-02-17T00:23:45Z",
          updated_at: "2021-02-17T00:26:22Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/dd3827bb-b952-4f9a-84d9-491c698b6a28",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:26:54 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "758",
      "Connection",
      "close",
      "x-amzn-requestid",
      "e9ff9990-4ac8-4965-a58b-e62fe50dd253",
      "x-amz-apigw-id",
      "a3RgUG8PPHcFXlQ=",
      "x-amzn-trace-id",
      "Root=1-602c62ce-030f35223fbbf2b0372057f7;Sampled=0",
      "x-envoy-upstream-service-time",
      "151",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "167",
      "x-ratelimit-reset",
      "6",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:26:55 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "09bf9412-404e-4709-9ba3-b941ef3b40f2",
      "x-amz-apigw-id",
      "a3RgZEOFoAMFsZg=",
      "x-amzn-trace-id",
      "Root=1-602c62cf-5a5bb7f20fe98aed3d6d7935;Sampled=0",
      "x-envoy-upstream-service-time",
      "30",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "5",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:26:55 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "6f119cb2-c54d-406c-95d9-b08f6b0ea9a4",
      "x-amz-apigw-id",
      "a3RgeHl7oAMFn2w=",
      "x-amzn-trace-id",
      "Root=1-602c62cf-40ee8b29113a101e3d95806f;Sampled=0",
      "x-envoy-upstream-service-time",
      "26",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "597",
      "x-ratelimit-reset",
      "5",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:26:56 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "ec2f7037-5405-4b6d-b353-2d1b42b1f835",
      "x-amz-apigw-id",
      "a3RgjFssIAMFlWg=",
      "x-amzn-trace-id",
      "Root=1-602c62d0-42f6dc6941989d5e3948370c;Sampled=0",
      "x-envoy-upstream-service-time",
      "26",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "596",
      "x-ratelimit-reset",
      "4",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [
      {
        custom_fields: { e2_T: "text", e3_N: 15.5, e4_D: "AAAAA" },
        email: "caio.silveira@mailinator.com",
        first_name: "Evan",
        phone_number: "000",
      },
    ],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "2b10806d-0dce-440b-8cc0-525c6d3f0ab5" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:26:57 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "b9fafb19-11d3-4ee5-9658-392f0ce3a79b",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3RgoFKuvHcF5qg=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c62d0-44765d1855c395b40cdc73ba;Sampled=0",
    "x-envoy-upstream-service-time",
    "398",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "4",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Evan",
          id: "dd3827bb-b952-4f9a-84d9-491c698b6a28",
          last_name: "Silveira",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999998",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-02-17T00:23:45Z",
          updated_at: "2021-02-17T00:26:22Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/dd3827bb-b952-4f9a-84d9-491c698b6a28",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:27:57 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "758",
      "Connection",
      "close",
      "x-amzn-requestid",
      "70859a70-86e6-43b3-8373-c1a353b219d0",
      "x-amz-apigw-id",
      "a3RqKEZpPHcFf1A=",
      "x-amzn-trace-id",
      "Root=1-602c630d-0f55eaca764cd2995868dcff;Sampled=0",
      "x-envoy-upstream-service-time",
      "146",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "171",
      "x-ratelimit-reset",
      "3",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Evan",
          id: "dd3827bb-b952-4f9a-84d9-491c698b6a28",
          last_name: "Silveira",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999998",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-02-17T00:23:45Z",
          updated_at: "2021-02-17T00:26:22Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/dd3827bb-b952-4f9a-84d9-491c698b6a28",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:27:58 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "758",
      "Connection",
      "close",
      "x-amzn-requestid",
      "eb8127a7-defc-4fbb-8e52-0123acb34a5c",
      "x-amz-apigw-id",
      "a3RqQEbQvHcFReA=",
      "x-amzn-trace-id",
      "Root=1-602c630e-434262b05ee2a4075a3c8fed;Sampled=0",
      "x-envoy-upstream-service-time",
      "143",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "170",
      "x-ratelimit-reset",
      "2",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [
      {
        custom_fields: {},
        first_name: "",
        phone_number: "",
        email: "caio.silveira@mailinator.com",
      },
    ],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "c2914bb5-ceb0-4455-8fe7-7db4b5b7d916" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:27:59 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "2a74658e-05bb-4147-bc2b-e2aa5a06b733",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3RqWEebPHcFReA=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c630e-2b5a7752020084356b9d31f7;Sampled=0",
    "x-envoy-upstream-service-time",
    "422",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "2",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "dd3827bb-b952-4f9a-84d9-491c698b6a28",
          last_name: "Silveira",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-02-17T00:23:45Z",
          updated_at: "2021-02-17T00:28:28Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/dd3827bb-b952-4f9a-84d9-491c698b6a28",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:29:00 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "740",
      "Connection",
      "close",
      "x-amzn-requestid",
      "94b7920f-a62f-4e6f-a381-b09b1e3e7b74",
      "x-amz-apigw-id",
      "a3Rz3E85vHcFeiQ=",
      "x-amzn-trace-id",
      "Root=1-602c634b-2e34fccb6786dbc70394c5d2;Sampled=0",
      "x-envoy-upstream-service-time",
      "136",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "170",
      "x-ratelimit-reset",
      "1",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "dd3827bb-b952-4f9a-84d9-491c698b6a28",
          last_name: "Silveira",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-02-17T00:23:45Z",
          updated_at: "2021-02-17T00:28:28Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/dd3827bb-b952-4f9a-84d9-491c698b6a28",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:29:00 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "740",
      "Connection",
      "close",
      "x-amzn-requestid",
      "0e3bc3d4-9dd9-44e9-964c-a51ed57e8a0e",
      "x-amz-apigw-id",
      "a3Rz-GN2vHcFuVQ=",
      "x-amzn-trace-id",
      "Root=1-602c634c-753f131064a351d40f2aa632;Sampled=0",
      "x-envoy-upstream-service-time",
      "209",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "60",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:29:01 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "499",
      "Connection",
      "close",
      "x-amzn-requestid",
      "93e8bb13-74a2-4b6c-ba9f-5a856fe383fe",
      "x-amz-apigw-id",
      "a3R0DHTdvHcFpzw=",
      "x-amzn-trace-id",
      "Root=1-602c634c-6c6d1fbf10bc134f5765fdff;Sampled=0",
      "x-envoy-upstream-service-time",
      "145",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "60",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:29:01 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "499",
      "Connection",
      "close",
      "x-amzn-requestid",
      "fb11d804-2605-4f07-9c9e-f59f4d1d4eda",
      "x-amz-apigw-id",
      "a3R0IFKXvHcFksw=",
      "x-amzn-trace-id",
      "Root=1-602c634d-7e836e256ac708600e464f90;Sampled=0",
      "x-envoy-upstream-service-time",
      "99",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "59",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/lists", { name: "List One" })
  .once()
  .reply(
    201,
    {
      name: "List One",
      id: "af966691-c619-4c54-b8b2-a4f5e2f31a49",
      contact_count: 0,
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists/af966691-c619-4c54-b8b2-a4f5e2f31a49",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:29:02 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "186",
      "Connection",
      "close",
      "x-amzn-requestid",
      "8e4a0f86-9ab4-440e-9b08-99b8e23ab092",
      "x-amz-apigw-id",
      "a3R0NEaNvHcFZxQ=",
      "x-amzn-trace-id",
      "Root=1-602c634d-2c367ab1110e4de31e6a7fd6;Sampled=0",
      "x-envoy-upstream-service-time",
      "117",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "59",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "List One",
          id: "af966691-c619-4c54-b8b2-a4f5e2f31a49",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/af966691-c619-4c54-b8b2-a4f5e2f31a49",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:29:02 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "685",
      "Connection",
      "close",
      "x-amzn-requestid",
      "d637c1d3-a35d-4073-940c-cddd4cdf54e8",
      "x-amz-apigw-id",
      "a3R0SHzCPHcF_KQ=",
      "x-amzn-trace-id",
      "Root=1-602c634e-294efe6f352c06665ea2c5cc;Sampled=0",
      "x-envoy-upstream-service-time",
      "95",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "597",
      "x-ratelimit-reset",
      "58",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "List One",
          id: "af966691-c619-4c54-b8b2-a4f5e2f31a49",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/af966691-c619-4c54-b8b2-a4f5e2f31a49",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:29:03 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "685",
      "Connection",
      "close",
      "x-amzn-requestid",
      "d203004b-e647-4d66-b91a-4d1d7e712ca9",
      "x-amz-apigw-id",
      "a3R0WEd5PHcF_Zw=",
      "x-amzn-trace-id",
      "Root=1-602c634e-076e6f477424533a0debc2b4;Sampled=0",
      "x-envoy-upstream-service-time",
      "99",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "596",
      "x-ratelimit-reset",
      "58",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/lists", { name: "List Two" })
  .once()
  .reply(
    201,
    {
      name: "List Two",
      id: "c584270c-5aa4-4f28-b02b-195bddcf59fd",
      contact_count: 0,
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists/c584270c-5aa4-4f28-b02b-195bddcf59fd",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:29:03 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "186",
      "Connection",
      "close",
      "x-amzn-requestid",
      "0901a07e-ce7d-4377-aa09-6c543cd5ecb2",
      "x-amz-apigw-id",
      "a3R0bFxcvHcFnjQ=",
      "x-amzn-trace-id",
      "Root=1-602c634f-23f79a6f09fd79dc20d84145;Sampled=0",
      "x-envoy-upstream-service-time",
      "127",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "57",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [{ custom_fields: {}, email: "caio.silveira@mailinator.com" }],
    list_ids: [
      "af966691-c619-4c54-b8b2-a4f5e2f31a49",
      "c584270c-5aa4-4f28-b02b-195bddcf59fd",
    ],
  })
  .once()
  .reply(202, { job_id: "db96c6b2-b474-4803-8457-5fbc51fca0f6" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:29:04 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "c57ebb7f-9673-4b19-8157-fbe0c319ddc8",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3R0gG40PHcF0mw=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c634f-69bda7b265335a9a4bad909c;Sampled=0",
    "x-envoy-upstream-service-time",
    "514",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "57",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "dd3827bb-b952-4f9a-84d9-491c698b6a28",
          last_name: "Silveira",
          list_ids: [
            "af966691-c619-4c54-b8b2-a4f5e2f31a49",
            "c584270c-5aa4-4f28-b02b-195bddcf59fd",
          ],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-02-17T00:23:45Z",
          updated_at: "2021-02-17T00:29:33Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/dd3827bb-b952-4f9a-84d9-491c698b6a28",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:30:05 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "817",
      "Connection",
      "close",
      "x-amzn-requestid",
      "28727edf-2809-4d3c-ab0e-feab0d076db0",
      "x-amz-apigw-id",
      "a3R-DFyYPHcFxww=",
      "x-amzn-trace-id",
      "Root=1-602c638d-315816c93da3abe53d8487e3;Sampled=0",
      "x-envoy-upstream-service-time",
      "136",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "196",
      "x-ratelimit-reset",
      "55",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "List One",
          id: "af966691-c619-4c54-b8b2-a4f5e2f31a49",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/af966691-c619-4c54-b8b2-a4f5e2f31a49",
          },
        },
        {
          name: "List Two",
          id: "c584270c-5aa4-4f28-b02b-195bddcf59fd",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/c584270c-5aa4-4f28-b02b-195bddcf59fd",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:30:05 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "871",
      "Connection",
      "close",
      "x-amzn-requestid",
      "8a6f6a2c-b612-43d7-9a1e-ac70db5aeb53",
      "x-amz-apigw-id",
      "a3R-IGuyvHcFRjw=",
      "x-amzn-trace-id",
      "Root=1-602c638d-3fcec22f78d351692c3b5181;Sampled=0",
      "x-envoy-upstream-service-time",
      "136",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "55",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "List One",
          id: "af966691-c619-4c54-b8b2-a4f5e2f31a49",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/af966691-c619-4c54-b8b2-a4f5e2f31a49",
          },
        },
        {
          name: "List Two",
          id: "c584270c-5aa4-4f28-b02b-195bddcf59fd",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/c584270c-5aa4-4f28-b02b-195bddcf59fd",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:30:06 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "871",
      "Connection",
      "close",
      "x-amzn-requestid",
      "a534daf7-a5d0-471a-9294-702ba4544923",
      "x-amz-apigw-id",
      "a3R-NHWKPHcFqIQ=",
      "x-amzn-trace-id",
      "Root=1-602c638e-34aa180a7ec29cb2272e2211;Sampled=0",
      "x-envoy-upstream-service-time",
      "123",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "54",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "dd3827bb-b952-4f9a-84d9-491c698b6a28",
          last_name: "Silveira",
          list_ids: [
            "c584270c-5aa4-4f28-b02b-195bddcf59fd",
            "af966691-c619-4c54-b8b2-a4f5e2f31a49",
          ],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-02-17T00:23:45Z",
          updated_at: "2021-02-17T00:29:33Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/dd3827bb-b952-4f9a-84d9-491c698b6a28",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:30:06 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "817",
      "Connection",
      "close",
      "x-amzn-requestid",
      "22f6b5b8-d394-4779-9ce4-361d509b4e22",
      "x-amz-apigw-id",
      "a3R-SG3JvHcFiEw=",
      "x-amzn-trace-id",
      "Root=1-602c638e-7dc80c7976fed616040c633d;Sampled=0",
      "x-envoy-upstream-service-time",
      "165",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "193",
      "x-ratelimit-reset",
      "54",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "List One",
          id: "af966691-c619-4c54-b8b2-a4f5e2f31a49",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/af966691-c619-4c54-b8b2-a4f5e2f31a49",
          },
        },
        {
          name: "List Two",
          id: "c584270c-5aa4-4f28-b02b-195bddcf59fd",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/c584270c-5aa4-4f28-b02b-195bddcf59fd",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:30:07 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "871",
      "Connection",
      "close",
      "x-amzn-requestid",
      "ba60c4cc-7fd4-46b0-a054-5f4176e6bb26",
      "x-amz-apigw-id",
      "a3R-YFWZPHcF79Q=",
      "x-amzn-trace-id",
      "Root=1-602c638f-1a1e607d632c51d84afcbeab;Sampled=0",
      "x-envoy-upstream-service-time",
      "99",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "597",
      "x-ratelimit-reset",
      "53",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [{ custom_fields: {}, email: "caio.silveira@mailinator.com" }],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "f4f9d48c-6fc7-4738-b4d6-20efbbaa2b97" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:30:08 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "86f058b0-cada-4b32-a0f6-19a786501419",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3R-dFvUPHcFoWA=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c638f-39a8a4210f4e704435bff775;Sampled=0",
    "x-envoy-upstream-service-time",
    "489",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "53",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "List One",
          id: "af966691-c619-4c54-b8b2-a4f5e2f31a49",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/af966691-c619-4c54-b8b2-a4f5e2f31a49",
          },
        },
        {
          name: "List Two",
          id: "c584270c-5aa4-4f28-b02b-195bddcf59fd",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/c584270c-5aa4-4f28-b02b-195bddcf59fd",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:30:08 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "871",
      "Connection",
      "close",
      "x-amzn-requestid",
      "26631ded-4edc-4781-89c7-d088f2ca0b0d",
      "x-amz-apigw-id",
      "a3R-lFYQvHcFYOQ=",
      "x-amzn-trace-id",
      "Root=1-602c6390-03705d8170eca7f0602018a6;Sampled=0",
      "x-envoy-upstream-service-time",
      "195",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "596",
      "x-ratelimit-reset",
      "52",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/lists/c584270c-5aa4-4f28-b02b-195bddcf59fd/contacts")
  .query({ contact_ids: "dd3827bb-b952-4f9a-84d9-491c698b6a28" })
  .once()
  .reply(202, { job_id: "3a7b12f0-af23-4092-b57f-0d105182a42f" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:30:09 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "42ce1190-f0c2-4f38-8715-0feab9811ebf",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3R-rEcxvHcFdqQ=",
    "access-control-allow-methods",
    "DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c6391-02e137b84aafa9f93fe15028;Sampled=0",
    "x-envoy-upstream-service-time",
    "453",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "600",
    "x-ratelimit-remaining",
    "599",
    "x-ratelimit-reset",
    "51",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "dd3827bb-b952-4f9a-84d9-491c698b6a28",
          last_name: "Silveira",
          list_ids: ["af966691-c619-4c54-b8b2-a4f5e2f31a49"],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-02-17T00:23:45Z",
          updated_at: "2021-02-17T00:30:38Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/dd3827bb-b952-4f9a-84d9-491c698b6a28",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:31:10 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "778",
      "Connection",
      "close",
      "x-amzn-requestid",
      "4209614a-f8ca-44a9-875c-12962627cf37",
      "x-amz-apigw-id",
      "a3SINGS9vHcFm8Q=",
      "x-amzn-trace-id",
      "Root=1-602c63cd-563f50107321a1f03f2a5228;Sampled=0",
      "x-envoy-upstream-service-time",
      "162",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "184",
      "x-ratelimit-reset",
      "51",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "dd3827bb-b952-4f9a-84d9-491c698b6a28",
          last_name: "Silveira",
          list_ids: ["af966691-c619-4c54-b8b2-a4f5e2f31a49"],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-02-17T00:23:45Z",
          updated_at: "2021-02-17T00:30:38Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/dd3827bb-b952-4f9a-84d9-491c698b6a28",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:31:10 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "778",
      "Connection",
      "close",
      "x-amzn-requestid",
      "bed25ff8-0bde-4119-ae05-09a9e8ed297c",
      "x-amz-apigw-id",
      "a3SITHDrvHcFa0A=",
      "x-amzn-trace-id",
      "Root=1-602c63ce-6b1649b52a8a970b5107bbfd;Sampled=0",
      "x-envoy-upstream-service-time",
      "159",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "182",
      "x-ratelimit-reset",
      "50",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "List One",
          id: "af966691-c619-4c54-b8b2-a4f5e2f31a49",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/af966691-c619-4c54-b8b2-a4f5e2f31a49",
          },
        },
        {
          name: "List Two",
          id: "c584270c-5aa4-4f28-b02b-195bddcf59fd",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/c584270c-5aa4-4f28-b02b-195bddcf59fd",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:31:11 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "871",
      "Connection",
      "close",
      "x-amzn-requestid",
      "1db8e5ba-cb80-4cb7-8a2f-3aeaae71baab",
      "x-amz-apigw-id",
      "a3SIZFvNvHcFWdA=",
      "x-amzn-trace-id",
      "Root=1-602c63cf-6b9464f152f7ed9e227f595f;Sampled=0",
      "x-envoy-upstream-service-time",
      "106",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "49",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "List One",
          id: "af966691-c619-4c54-b8b2-a4f5e2f31a49",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/af966691-c619-4c54-b8b2-a4f5e2f31a49",
          },
        },
        {
          name: "List Two",
          id: "c584270c-5aa4-4f28-b02b-195bddcf59fd",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/c584270c-5aa4-4f28-b02b-195bddcf59fd",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:31:11 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "871",
      "Connection",
      "close",
      "x-amzn-requestid",
      "e40860b7-b05c-4560-ade4-3bc25d1dddf7",
      "x-amz-apigw-id",
      "a3SIfGv6vHcF8bg=",
      "x-amzn-trace-id",
      "Root=1-602c63cf-60391bb24856b38323c09549;Sampled=0",
      "x-envoy-upstream-service-time",
      "125",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "49",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "List One",
          id: "af966691-c619-4c54-b8b2-a4f5e2f31a49",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/af966691-c619-4c54-b8b2-a4f5e2f31a49",
          },
        },
        {
          name: "List Two",
          id: "c584270c-5aa4-4f28-b02b-195bddcf59fd",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/c584270c-5aa4-4f28-b02b-195bddcf59fd",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:31:12 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "871",
      "Connection",
      "close",
      "x-amzn-requestid",
      "428b96c7-c897-4913-adab-8ee8561f974c",
      "x-amz-apigw-id",
      "a3SIlF7tvHcFiew=",
      "x-amzn-trace-id",
      "Root=1-602c63d0-792af4114f453f242070ab66;Sampled=0",
      "x-envoy-upstream-service-time",
      "111",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "597",
      "x-ratelimit-reset",
      "48",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/lists", { name: "List Three" })
  .once()
  .reply(
    201,
    {
      name: "List Three",
      id: "400d3819-fd76-4597-8e31-f955a6a828d1",
      contact_count: 0,
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists/400d3819-fd76-4597-8e31-f955a6a828d1",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:31:13 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "188",
      "Connection",
      "close",
      "x-amzn-requestid",
      "ea7135c2-0326-483a-90be-780c3b508b49",
      "x-amz-apigw-id",
      "a3SIrGpIPHcFr6Q=",
      "x-amzn-trace-id",
      "Root=1-602c63d0-1fccbf663f6dd15111a6f6f4;Sampled=0",
      "x-envoy-upstream-service-time",
      "123",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "48",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [{ custom_fields: {}, email: "caio.silveira@mailinator.com" }],
    list_ids: [
      "c584270c-5aa4-4f28-b02b-195bddcf59fd",
      "400d3819-fd76-4597-8e31-f955a6a828d1",
    ],
  })
  .once()
  .reply(202, { job_id: "754da8da-ea80-4b5c-ba7d-dcb340611752" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:31:14 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "cecf70de-f764-44fa-8417-f5bd0cba017c",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3SIwHdFvHcF9JA=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c63d1-1d0232e6282e205d1a7777d0;Sampled=0",
    "x-envoy-upstream-service-time",
    "613",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "47",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "dd3827bb-b952-4f9a-84d9-491c698b6a28",
          last_name: "Silveira",
          list_ids: [
            "c584270c-5aa4-4f28-b02b-195bddcf59fd",
            "af966691-c619-4c54-b8b2-a4f5e2f31a49",
            "400d3819-fd76-4597-8e31-f955a6a828d1",
          ],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-02-17T00:23:45Z",
          updated_at: "2021-02-17T00:31:42Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/dd3827bb-b952-4f9a-84d9-491c698b6a28",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:32:14 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "856",
      "Connection",
      "close",
      "x-amzn-requestid",
      "9bfc870f-56c9-4656-bd35-b6607b92b641",
      "x-amz-apigw-id",
      "a3SSTEPPPHcFd6Q=",
      "x-amzn-trace-id",
      "Root=1-602c640e-7bf30a863ef60b1630c5750f;Sampled=0",
      "x-envoy-upstream-service-time",
      "151",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "191",
      "x-ratelimit-reset",
      "46",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "List Three",
          id: "400d3819-fd76-4597-8e31-f955a6a828d1",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/400d3819-fd76-4597-8e31-f955a6a828d1",
          },
        },
        {
          name: "List One",
          id: "af966691-c619-4c54-b8b2-a4f5e2f31a49",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/af966691-c619-4c54-b8b2-a4f5e2f31a49",
          },
        },
        {
          name: "List Two",
          id: "c584270c-5aa4-4f28-b02b-195bddcf59fd",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/c584270c-5aa4-4f28-b02b-195bddcf59fd",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:32:15 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1059",
      "Connection",
      "close",
      "x-amzn-requestid",
      "efdf4504-5003-4ddb-bf04-6148cb754fb1",
      "x-amz-apigw-id",
      "a3SSZGnaPHcFbrA=",
      "x-amzn-trace-id",
      "Root=1-602c640f-1f38e8f571a7f6207f9dadda;Sampled=0",
      "x-envoy-upstream-service-time",
      "98",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "45",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "dd3827bb-b952-4f9a-84d9-491c698b6a28",
          last_name: "Silveira",
          list_ids: [
            "c584270c-5aa4-4f28-b02b-195bddcf59fd",
            "af966691-c619-4c54-b8b2-a4f5e2f31a49",
            "400d3819-fd76-4597-8e31-f955a6a828d1",
          ],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-02-17T00:23:45Z",
          updated_at: "2021-02-17T00:31:42Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/dd3827bb-b952-4f9a-84d9-491c698b6a28",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:32:15 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "856",
      "Connection",
      "close",
      "x-amzn-requestid",
      "a466964f-e006-45d2-b979-b7887b777178",
      "x-amz-apigw-id",
      "a3SSfEZ9vHcFn4A=",
      "x-amzn-trace-id",
      "Root=1-602c640f-0bd64bd036b35b9826aff23b;Sampled=0",
      "x-envoy-upstream-service-time",
      "149",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "190",
      "x-ratelimit-reset",
      "45",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [{ custom_fields: {}, email: "caio.silveira@mailinator.com" }],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "3519c72d-8216-488c-983a-0006766559e9" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:32:16 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "cf9b758c-e15f-4585-b1ce-b219b40855ff",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3SSlE3BvHcFd0A=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c6410-6468e1974187415e30532b68;Sampled=0",
    "x-envoy-upstream-service-time",
    "496",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "44",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "List Three",
          id: "400d3819-fd76-4597-8e31-f955a6a828d1",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/400d3819-fd76-4597-8e31-f955a6a828d1",
          },
        },
        {
          name: "List One",
          id: "af966691-c619-4c54-b8b2-a4f5e2f31a49",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/af966691-c619-4c54-b8b2-a4f5e2f31a49",
          },
        },
        {
          name: "List Two",
          id: "c584270c-5aa4-4f28-b02b-195bddcf59fd",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/c584270c-5aa4-4f28-b02b-195bddcf59fd",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:32:17 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1059",
      "Connection",
      "close",
      "x-amzn-requestid",
      "503a3bea-ed38-4bb9-8564-c4d7a1764427",
      "x-amz-apigw-id",
      "a3SSvFUsvHcF2CA=",
      "x-amzn-trace-id",
      "Root=1-602c6411-2369f7420f5573405d95f509;Sampled=0",
      "x-envoy-upstream-service-time",
      "115",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "43",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "List Three",
          id: "400d3819-fd76-4597-8e31-f955a6a828d1",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/400d3819-fd76-4597-8e31-f955a6a828d1",
          },
        },
        {
          name: "List One",
          id: "af966691-c619-4c54-b8b2-a4f5e2f31a49",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/af966691-c619-4c54-b8b2-a4f5e2f31a49",
          },
        },
        {
          name: "List Two",
          id: "c584270c-5aa4-4f28-b02b-195bddcf59fd",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/c584270c-5aa4-4f28-b02b-195bddcf59fd",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:32:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1059",
      "Connection",
      "close",
      "x-amzn-requestid",
      "68fc9c23-63e4-4b2a-9995-7101ab66d05e",
      "x-amz-apigw-id",
      "a3SS1EygvHcFj8A=",
      "x-amzn-trace-id",
      "Root=1-602c6412-76e9cd37684d8b9d77aab093;Sampled=0",
      "x-envoy-upstream-service-time",
      "113",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "597",
      "x-ratelimit-reset",
      "42",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/lists", { name: "List Four" })
  .once()
  .reply(
    201,
    {
      name: "List Four",
      id: "b5a03dde-1b82-479d-8c9f-5685147503ad",
      contact_count: 0,
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists/b5a03dde-1b82-479d-8c9f-5685147503ad",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:32:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "187",
      "Connection",
      "close",
      "x-amzn-requestid",
      "d469a999-4e20-46fe-bf56-0494bf3df9ef",
      "x-amz-apigw-id",
      "a3SS7HgBvHcFp6g=",
      "x-amzn-trace-id",
      "Root=1-602c6412-094d31a0512dd583750c9e95;Sampled=0",
      "x-envoy-upstream-service-time",
      "122",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "42",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "dd3827bb-b952-4f9a-84d9-491c698b6a28",
          last_name: "Silveira",
          list_ids: [
            "c584270c-5aa4-4f28-b02b-195bddcf59fd",
            "af966691-c619-4c54-b8b2-a4f5e2f31a49",
            "400d3819-fd76-4597-8e31-f955a6a828d1",
          ],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-02-17T00:23:45Z",
          updated_at: "2021-02-17T00:31:42Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/dd3827bb-b952-4f9a-84d9-491c698b6a28",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:33:19 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "856",
      "Connection",
      "close",
      "x-amzn-requestid",
      "c16faa65-8f2e-41d0-bad7-f5bfd7fc9434",
      "x-amz-apigw-id",
      "a3ScZGlUPHcF_KQ=",
      "x-amzn-trace-id",
      "Root=1-602c644f-2e755c693dab4ae25ec83ad9;Sampled=0",
      "x-envoy-upstream-service-time",
      "130",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "188",
      "x-ratelimit-reset",
      "41",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "List Three",
          id: "400d3819-fd76-4597-8e31-f955a6a828d1",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/400d3819-fd76-4597-8e31-f955a6a828d1",
          },
        },
        {
          name: "List One",
          id: "af966691-c619-4c54-b8b2-a4f5e2f31a49",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/af966691-c619-4c54-b8b2-a4f5e2f31a49",
          },
        },
        {
          name: "List Four",
          id: "b5a03dde-1b82-479d-8c9f-5685147503ad",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/b5a03dde-1b82-479d-8c9f-5685147503ad",
          },
        },
        {
          name: "List Two",
          id: "c584270c-5aa4-4f28-b02b-195bddcf59fd",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/c584270c-5aa4-4f28-b02b-195bddcf59fd",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:33:19 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1246",
      "Connection",
      "close",
      "x-amzn-requestid",
      "34dc3022-218d-46f7-9bd3-ac14355e3e09",
      "x-amz-apigw-id",
      "a3ScfFNvPHcFT6Q=",
      "x-amzn-trace-id",
      "Root=1-602c644f-533c46594dd29e2e4871681a;Sampled=0",
      "x-envoy-upstream-service-time",
      "91",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "41",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'lucas.nogueira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:33:20 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "c7144000-6c7f-48ea-a2b1-5ab4ab08c8a6",
      "x-amz-apigw-id",
      "a3ScjF7NPHcFyWg=",
      "x-amzn-trace-id",
      "Root=1-602c6450-6efb468965b847387e9d5776;Sampled=0",
      "x-envoy-upstream-service-time",
      "187",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "186",
      "x-ratelimit-reset",
      "40",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "dd3827bb-b952-4f9a-84d9-491c698b6a28",
          last_name: "Silveira",
          list_ids: [
            "c584270c-5aa4-4f28-b02b-195bddcf59fd",
            "af966691-c619-4c54-b8b2-a4f5e2f31a49",
            "400d3819-fd76-4597-8e31-f955a6a828d1",
          ],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-02-17T00:23:45Z",
          updated_at: "2021-02-17T00:31:42Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/dd3827bb-b952-4f9a-84d9-491c698b6a28",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:33:21 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "856",
      "Connection",
      "close",
      "x-amzn-requestid",
      "e709add7-edc8-4387-a29b-1cfd802284b8",
      "x-amz-apigw-id",
      "a3ScqHNkvHcFXmQ=",
      "x-amzn-trace-id",
      "Root=1-602c6450-24e98d725f02756a57cff1ca;Sampled=0",
      "x-envoy-upstream-service-time",
      "115",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "185",
      "x-ratelimit-reset",
      "40",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/contacts")
  .query({ ids: "dd3827bb-b952-4f9a-84d9-491c698b6a28" })
  .once()
  .reply(202, { job_id: "80207e87-a8e4-4132-b1ce-0ddfa921c5c4" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:33:21 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "ca2b23ee-e064-4d73-b307-32425335caec",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3ScvEYOvHcFTeQ=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c6451-1468d25232dd76bb49d723d9;Sampled=0",
    "x-envoy-upstream-service-time",
    "428",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "39",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [{ custom_fields: {}, email: "lucas.nogueira@mailinator.com" }],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "021bc4a3-f8c8-4005-8013-5a3d51bf5464" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:33:22 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "ab7e2a02-08fa-4a94-92cd-d06b11eec31c",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3Sc3Fa1vHcF1sA=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c6452-717c88af30e93ac043647ecc;Sampled=0",
    "x-envoy-upstream-service-time",
    "457",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "38",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'lucas.nogueira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "lucas.nogueira@mailinator.com",
          first_name: "",
          id: "4be8be2d-f7a2-4462-99c2-ce5cab2138e0",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-02-17T00:33:22Z",
          updated_at: "2021-02-17T00:33:51Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/4be8be2d-f7a2-4462-99c2-ce5cab2138e0",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:34:23 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "658",
      "Connection",
      "close",
      "x-amzn-requestid",
      "fb2843f1-f1e1-40d6-b1dc-4bc1cb41acfc",
      "x-amz-apigw-id",
      "a3SmZHD2PHcFlZw=",
      "x-amzn-trace-id",
      "Root=1-602c648f-63663b357955ca5952e63ae0;Sampled=0",
      "x-envoy-upstream-service-time",
      "128",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "183",
      "x-ratelimit-reset",
      "37",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:34:23 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "df90d129-4036-404f-a4aa-7610558cdc5c",
      "x-amz-apigw-id",
      "a3SmeGIfvHcFXcg=",
      "x-amzn-trace-id",
      "Root=1-602c648f-5cd7aa756e009f4e5e154625;Sampled=0",
      "x-envoy-upstream-service-time",
      "117",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "181",
      "x-ratelimit-reset",
      "37",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:34:24 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "18290957-60b5-47f1-905f-e52b02b5090c",
      "x-amz-apigw-id",
      "a3SmjG3jvHcF4mg=",
      "x-amzn-trace-id",
      "Root=1-602c6490-2b0c5ab70a65c9d3797f3406;Sampled=0",
      "x-envoy-upstream-service-time",
      "138",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "180",
      "x-ratelimit-reset",
      "36",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'lucas.nogueira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "lucas.nogueira@mailinator.com",
          first_name: "",
          id: "4be8be2d-f7a2-4462-99c2-ce5cab2138e0",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-02-17T00:33:22Z",
          updated_at: "2021-02-17T00:33:51Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/4be8be2d-f7a2-4462-99c2-ce5cab2138e0",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:34:25 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "658",
      "Connection",
      "close",
      "x-amzn-requestid",
      "cb5357b3-9536-4d30-aea2-28eeb9d345ea",
      "x-amz-apigw-id",
      "a3SmoEO3vHcFXKQ=",
      "x-amzn-trace-id",
      "Root=1-602c6490-30c38f96168322102c36ea87;Sampled=0",
      "x-envoy-upstream-service-time",
      "354",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "178",
      "x-ratelimit-reset",
      "36",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/contacts")
  .query({ ids: "4be8be2d-f7a2-4462-99c2-ce5cab2138e0" })
  .once()
  .reply(202, { job_id: "a886c6c9-46ea-4542-b74e-44940fd953d7" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:34:25 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "2f73e8e3-a694-42d3-8a26-6a7295865828",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3SmwG9_vHcFhAw=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c6491-47c669272209f68618e2c08a;Sampled=0",
    "x-envoy-upstream-service-time",
    "366",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "35",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [
      {
        custom_fields: {},
        email: "sandro.arturo@mailinator.com",
        first_name: "Lucas",
        phone_number: "+5583999999997",
      },
    ],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "a48db9ca-2c6b-4ead-907c-d80cfea17750" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:34:26 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "3bb1c015-8c7b-4362-be6f-22d539dd336a",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3Sm3FtLvHcF0SA=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c6492-26f1a67163410f9354f82c30;Sampled=0",
    "x-envoy-upstream-service-time",
    "413",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "34",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "sandro.arturo@mailinator.com",
          first_name: "Lucas",
          id: "46c3c802-3cf0-4821-a203-4613a905e904",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999997",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-02-17T00:34:26Z",
          updated_at: "2021-02-17T00:34:55Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/46c3c802-3cf0-4821-a203-4613a905e904",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:35:27 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "676",
      "Connection",
      "close",
      "x-amzn-requestid",
      "9a343966-fb96-4839-bbc9-f635c03f108d",
      "x-amz-apigw-id",
      "a3SwZGiyvHcFhdg=",
      "x-amzn-trace-id",
      "Root=1-602c64cf-19e371a02303aa2624d3f036;Sampled=0",
      "x-envoy-upstream-service-time",
      "169",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "170",
      "x-ratelimit-reset",
      "33",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'lucas.nogueira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:35:27 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "290338ac-0e6e-4126-bbe9-c200ff8d29be",
      "x-amz-apigw-id",
      "a3SwfFDkPHcFRGA=",
      "x-amzn-trace-id",
      "Root=1-602c64cf-3b426d694699eed03fc6b0e0;Sampled=0",
      "x-envoy-upstream-service-time",
      "133",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "169",
      "x-ratelimit-reset",
      "33",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "sandro.arturo@mailinator.com",
          first_name: "Lucas",
          id: "46c3c802-3cf0-4821-a203-4613a905e904",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999997",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-02-17T00:34:26Z",
          updated_at: "2021-02-17T00:34:55Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/46c3c802-3cf0-4821-a203-4613a905e904",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:35:28 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "676",
      "Connection",
      "close",
      "x-amzn-requestid",
      "e6f170ee-83db-4518-8ac9-ec6442a10a84",
      "x-amz-apigw-id",
      "a3SwlEg0vHcFZTQ=",
      "x-amzn-trace-id",
      "Root=1-602c64d0-1abb0e5c7fee68f4186eb8dd;Sampled=0",
      "x-envoy-upstream-service-time",
      "180",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "167",
      "x-ratelimit-reset",
      "32",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/contacts")
  .query({ ids: "46c3c802-3cf0-4821-a203-4613a905e904" })
  .once()
  .reply(202, { job_id: "a144a30b-f681-400b-a8cd-622abcf55f18" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:35:29 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "f548fd00-b4f0-4677-91e0-e0aafa8b1414",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3SwsE9evHcF6jg=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c64d1-72f94f14114c53f475e09da5;Sampled=0",
    "x-envoy-upstream-service-time",
    "450",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "31",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:36:30 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "7fcaf231-612f-4eed-8e2a-a352603ced7c",
      "x-amz-apigw-id",
      "a3S6OG2qPHcFk4g=",
      "x-amzn-trace-id",
      "Root=1-602c650e-098745c1497c9d0a0a62f2bf;Sampled=0",
      "x-envoy-upstream-service-time",
      "169",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "194",
      "x-ratelimit-reset",
      "30",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:36:30 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "b0026f11-0b21-4abb-a12d-6f46cd605fa3",
      "x-amz-apigw-id",
      "a3S6UHQkvHcFTTg=",
      "x-amzn-trace-id",
      "Root=1-602c650e-70bdc52362c655a4022839be;Sampled=0",
      "x-envoy-upstream-service-time",
      "114",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "193",
      "x-ratelimit-reset",
      "30",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:36:31 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "20ea33dd-3c1a-420b-b9d5-47e4bc01cc64",
      "x-amz-apigw-id",
      "a3S6ZEBvPHcFpbg=",
      "x-amzn-trace-id",
      "Root=1-602c650f-034f9d7f108d81002ee71c96;Sampled=0",
      "x-envoy-upstream-service-time",
      "124",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "192",
      "x-ratelimit-reset",
      "29",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",

      "Wed, 17 Feb 2021 00:36:31 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "81ec587f-05a1-4d46-805a-213da2cfbef7",
      "x-amz-apigw-id",
      "a3S6eGjpvHcFhMQ=",
      "x-amzn-trace-id",
      "Root=1-602c650f-3ff669893c80948667c2d400;Sampled=0",
      "x-envoy-upstream-service-time",
      "129",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "191",
      "x-ratelimit-reset",
      "29",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'carlos.solimoes@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:36:32 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "e4e11408-29fa-4a87-988a-39608487ef85",
      "x-amz-apigw-id",
      "a3S6jFzqPHcFtDg=",
      "x-amzn-trace-id",
      "Root=1-602c6510-04c9d6cc0fb6516d4b983af4;Sampled=0",
      "x-envoy-upstream-service-time",
      "119",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "190",
      "x-ratelimit-reset",
      "28",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'carlos.solimoes@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:36:32 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "08543ab3-83bd-4a89-9240-f8f81d84e7a2",
      "x-amz-apigw-id",
      "a3S6oFcTvHcFxjg=",
      "x-amzn-trace-id",
      "Root=1-602c6510-5c664239027e7f0c1c2bba4a;Sampled=0",
      "x-envoy-upstream-service-time",
      "125",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "189",
      "x-ratelimit-reset",
      "28",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 7,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "List Three",
          id: "400d3819-fd76-4597-8e31-f955a6a828d1",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/400d3819-fd76-4597-8e31-f955a6a828d1",
          },
        },
        {
          name: "List One",
          id: "af966691-c619-4c54-b8b2-a4f5e2f31a49",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/af966691-c619-4c54-b8b2-a4f5e2f31a49",
          },
        },
        {
          name: "List Four",
          id: "b5a03dde-1b82-479d-8c9f-5685147503ad",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/b5a03dde-1b82-479d-8c9f-5685147503ad",
          },
        },
        {
          name: "List Two",
          id: "c584270c-5aa4-4f28-b02b-195bddcf59fd",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/c584270c-5aa4-4f28-b02b-195bddcf59fd",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 63,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:36:33 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1246",
      "Connection",
      "close",
      "x-amzn-requestid",
      "a4a28865-49dc-43c2-b4a0-6205581d938d",
      "x-amz-apigw-id",
      "a3S6tGvePHcFRcg=",
      "x-amzn-trace-id",
      "Root=1-602c6511-3ab632443258501f6d82118b;Sampled=0",
      "x-envoy-upstream-service-time",
      "84",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "27",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [
      {
        custom_fields: {},
        email: "carlos.solimoes@mailinator.com",
        first_name: "Carlos",
      },
    ],
    list_ids: ["b5a03dde-1b82-479d-8c9f-5685147503ad"],
  })
  .once()
  .reply(202, { job_id: "31107d43-ab6e-4718-9e2c-d14933435a68" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:36:34 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "e43a9dd8-5ee0-4d2d-b37f-d096b372ca74",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3S6xGz7vHcFXsg=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c6511-4ac6082b47b50bc474859a12;Sampled=0",
    "x-envoy-upstream-service-time",
    "654",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "27",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'carlos.solimoes@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "carlos.solimoes@mailinator.com",
          first_name: "Carlos",
          id: "4d7553cb-3d12-41ba-9180-5dd5da29e189",
          last_name: "",
          list_ids: ["b5a03dde-1b82-479d-8c9f-5685147503ad"],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-02-17T00:36:33Z",
          updated_at: "2021-02-17T00:37:02Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/4d7553cb-3d12-41ba-9180-5dd5da29e189",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:37:35 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "703",
      "Connection",
      "close",
      "x-amzn-requestid",
      "348a6670-5b1a-42d9-a074-3504d880cf53",
      "x-amz-apigw-id",
      "a3TEWETjPHcFaqQ=",
      "x-amzn-trace-id",
      "Root=1-602c654e-72a072a454f998d166cb1af3;Sampled=0",
      "x-envoy-upstream-service-time",
      "295",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "172",
      "x-ratelimit-reset",
      "26",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'jake.jill@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:37:35 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "156f8450-41dc-4e8d-bc7f-216dd65791de",
      "x-amz-apigw-id",
      "a3TEcF0zvHcF8Lw=",
      "x-amzn-trace-id",
      "Root=1-602c654f-54c2f460510d380f32189b10;Sampled=0",
      "x-envoy-upstream-service-time",
      "163",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "170",
      "x-ratelimit-reset",
      "25",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'pilo.paz@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:37:36 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "7b62c163-12d9-4f49-a39e-d8c90492c0e4",
      "x-amz-apigw-id",
      "a3TEiENZvHcFkAQ=",
      "x-amzn-trace-id",
      "Root=1-602c6550-4b08df714c2f9e983e25485e;Sampled=0",
      "x-envoy-upstream-service-time",
      "179",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "169",
      "x-ratelimit-reset",
      "24",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'jake.jill@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:37:36 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "f283ec30-e7d1-44fc-abf1-0b24f543ac84",
      "x-amz-apigw-id",
      "a3TEnFYIPHcF_Zw=",
      "x-amzn-trace-id",
      "Root=1-602c6550-21b0ec956abf6e747e913b82;Sampled=0",
      "x-envoy-upstream-service-time",
      "132",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "168",
      "x-ratelimit-reset",
      "24",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'pilo.paz@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:37:37 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "aab064fb-2733-4c1e-85cd-ed2dca0a31b4",
      "x-amz-apigw-id",
      "a3TEsFoLvHcFbrA=",
      "x-amzn-trace-id",
      "Root=1-602c6551-1056217d72fa23b93808ae23;Sampled=0",
      "x-envoy-upstream-service-time",
      "109",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "167",
      "x-ratelimit-reset",
      "23",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [
      {
        custom_fields: {},
        email: "jake.jill@mailinator.com",
        first_name: "Jake",
      },
    ],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "8b259ecd-69c5-40f2-97db-a40e56bc1cba" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:37:38 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "9708c015-86d5-4e3f-bd66-3900cc208768",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3TExHF_vHcFSPw=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c6551-1dcadc54529be62d2b97ac38;Sampled=0",
    "x-envoy-upstream-service-time",
    "410",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "23",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'jake.jill@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "jake.jill@mailinator.com",
          first_name: "Jake",
          id: "2d0d8cdc-52af-4577-896f-bebfe2617827",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-02-17T00:37:37Z",
          updated_at: "2021-02-17T00:38:06Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/2d0d8cdc-52af-4577-896f-bebfe2617827",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:38:39 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "657",
      "Connection",
      "close",
      "x-amzn-requestid",
      "a6d5372a-c43a-4423-847b-4eecc362fe18",
      "x-amz-apigw-id",
      "a3TOUG_cvHcFtIw=",
      "x-amzn-trace-id",
      "Root=1-602c658e-489c223640c13dd0675aad02;Sampled=0",
      "x-envoy-upstream-service-time",
      "401",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "191",
      "x-ratelimit-reset",
      "22",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", { query: "email = '000'" })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:38:39 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "5df1612e-8e24-4be8-bfd1-b7ca9d73d1ef",
      "x-amz-apigw-id",
      "a3TOdFErPHcFm9g=",
      "x-amzn-trace-id",
      "Root=1-602c658f-7b26e29f107b1b803e90620b;Sampled=0",
      "x-envoy-upstream-service-time",
      "268",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "21",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [{ custom_fields: {}, email: "000" }],
    list_ids: [],
  })
  .once()
  .reply(
    400,
    {
      errors: [
        { field: "contacts[0].email", message: "email '000' is not valid" },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:38:40 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "79",
      "Connection",
      "close",
      "x-amzn-requestid",
      "5fb4c4bb-aa6a-45b9-8fc2-0402eced168b",
      "access-control-allow-origin",
      "*",
      "access-control-allow-headers",
      "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
      "x-amz-apigw-id",
      "a3TOjE_cPHcF1cw=",
      "access-control-allow-methods",
      "PUT,DELETE,OPTIONS",
      "access-control-expose-headers",
      "Link, Location",
      "x-amzn-trace-id",
      "Root=1-602c6590-661fe572037d49e82f5f2dcd;Sampled=0",
      "x-envoy-upstream-service-time",
      "120",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "20",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:38:40 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "bf33d391-9720-44b1-9654-f37139e2dcb7",
      "x-amz-apigw-id",
      "a3TOpH8dvHcFt9Q=",
      "x-amzn-trace-id",
      "Root=1-602c6590-7623a0947bd60958512945c0;Sampled=0",
      "x-envoy-upstream-service-time",
      "125",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "20",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'lucas.nogueira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:38:41 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "a0df5350-6abd-4d29-83d4-8fa41f67aa9d",
      "x-amz-apigw-id",
      "a3TOuEiWvHcFyWg=",
      "x-amzn-trace-id",
      "Root=1-602c6591-448d40774e6bccae5303ada3;Sampled=0",
      "x-envoy-upstream-service-time",
      "110",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "197",
      "x-ratelimit-reset",
      "19",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:38:41 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "5ee30c2a-833e-4362-9e3e-bb6e19fc2e7a",
      "x-amz-apigw-id",
      "a3TOyFzqvHcF7Iw=",
      "x-amzn-trace-id",
      "Root=1-602c6591-48053c8d266f58ce09dc27a1;Sampled=0",
      "x-envoy-upstream-service-time",
      "135",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "196",
      "x-ratelimit-reset",
      "19",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'carlos.solimoes@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "carlos.solimoes@mailinator.com",
          first_name: "Carlos",
          id: "4d7553cb-3d12-41ba-9180-5dd5da29e189",
          last_name: "",
          list_ids: ["b5a03dde-1b82-479d-8c9f-5685147503ad"],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-02-17T00:36:33Z",
          updated_at: "2021-02-17T00:37:02Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/4d7553cb-3d12-41ba-9180-5dd5da29e189",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:38:42 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "703",
      "Connection",
      "close",
      "x-amzn-requestid",
      "cd61aaa3-5d43-48c4-a62c-bdc316730b17",
      "x-amz-apigw-id",
      "a3TO4FoJvHcF_9Q=",
      "x-amzn-trace-id",
      "Root=1-602c6592-12742f093df5e2096f63e893;Sampled=0",
      "x-envoy-upstream-service-time",
      "137",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "195",
      "x-ratelimit-reset",
      "18",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'jake.jill@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "jake.jill@mailinator.com",
          first_name: "Jake",
          id: "2d0d8cdc-52af-4577-896f-bebfe2617827",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-02-17T00:37:37Z",
          updated_at: "2021-02-17T00:38:06Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/2d0d8cdc-52af-4577-896f-bebfe2617827",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Wed, 17 Feb 2021 00:38:42 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "657",
      "Connection",
      "close",
      "x-amzn-requestid",
      "18848d59-73da-456c-a110-37cadb51b861",
      "x-amz-apigw-id",
      "a3TO9Ef7PHcFtTQ=",
      "x-amzn-trace-id",
      "Root=1-602c6592-434fe92b39c344c05eaf3983;Sampled=0",
      "x-envoy-upstream-service-time",
      "155",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "194",
      "x-ratelimit-reset",
      "18",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/contacts")
  .query({
    ids:
      "4d7553cb-3d12-41ba-9180-5dd5da29e189%2C2d0d8cdc-52af-4577-896f-bebfe2617827",
  })
  .once()
  .reply(202, { job_id: "bd282378-32f3-436e-bb2d-057fb04336c6" }, [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:38:43 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "8d81a231-3e7a-446f-ac4b-2682939c573a",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3TPCEzRPHcF_Xg=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c6593-4cc92d9f167962e70c53f83e;Sampled=0",
    "x-envoy-upstream-service-time",
    "381",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "17",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/lists/af966691-c619-4c54-b8b2-a4f5e2f31a49")
  .once()
  .reply(204, "", [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:38:44 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "0",
    "Connection",
    "close",
    "x-amzn-requestid",
    "e3d32f55-a8d4-4258-9881-d6e8fe3b8922",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3TPKFaMPHcFlRg=",
    "access-control-allow-methods",
    "DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c6594-397a5b795ab17e8351793dc8;Sampled=0",
    "x-envoy-upstream-service-time",
    "592",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "600",
    "x-ratelimit-remaining",
    "599",
    "x-ratelimit-reset",
    "16",
    "Powered-By",
    "SGGateway",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/lists/c584270c-5aa4-4f28-b02b-195bddcf59fd")
  .once()
  .reply(204, "", [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:38:45 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "0",
    "Connection",
    "close",
    "x-amzn-requestid",
    "08d97282-caa8-4960-a774-22d0cadf8c01",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3TPTGE5vHcFXmQ=",
    "access-control-allow-methods",
    "DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c6595-4532507c5df341dc342c3a01;Sampled=0",
    "x-envoy-upstream-service-time",
    "677",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "600",
    "x-ratelimit-remaining",
    "598",
    "x-ratelimit-reset",
    "15",
    "Powered-By",
    "SGGateway",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/lists/400d3819-fd76-4597-8e31-f955a6a828d1")
  .once()
  .reply(204, "", [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:38:47 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "0",
    "Connection",
    "close",
    "x-amzn-requestid",
    "8566b5c4-1bf9-4a5b-a890-890ae791b951",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3TPeFdJvHcFr_A=",
    "access-control-allow-methods",
    "DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c6596-2860b3555f49dfcb0eb45f28;Sampled=0",
    "x-envoy-upstream-service-time",
    "1063",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "600",
    "x-ratelimit-remaining",
    "597",
    "x-ratelimit-reset",
    "14",
    "Powered-By",
    "SGGateway",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/lists/b5a03dde-1b82-479d-8c9f-5685147503ad")
  .once()
  .reply(204, "", [
    "Server",
    "nginx",
    "Date",
    "Wed, 17 Feb 2021 00:38:48 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "0",
    "Connection",
    "close",
    "x-amzn-requestid",
    "7d78e0b1-d0b3-473c-8a8c-c2a1aabbf6c7",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "a3TPsHOlPHcFvEQ=",
    "access-control-allow-methods",
    "DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-602c6597-46df96fd30c4662e2ccb39ef;Sampled=0",
    "x-envoy-upstream-service-time",
    "577",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "600",
    "x-ratelimit-remaining",
    "596",
    "x-ratelimit-reset",
    "13",
    "Powered-By",
    "SGGateway",
  ]);
