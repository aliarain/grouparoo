const nock = require("nock");

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
      "Wed, 17 Feb 2021 00:21:39 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "365c03d6-584c-40b4-aac1-1b49d7c89574",
      "x-amz-apigw-id",
      "a3QvBFy8oAMFqMA=",
      "x-amzn-trace-id",
      "Root=1-602c6193-486ee227331e246f450d8636;Sampled=0",
      "x-envoy-upstream-service-time",
      "55",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "21",
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
      "Wed, 17 Feb 2021 00:21:39 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "ee7bc317-c14d-4fca-8f00-e1e0966e4402",
      "x-amz-apigw-id",
      "a3QvFFZuIAMFdfQ=",
      "x-amzn-trace-id",
      "Root=1-602c6193-58afde494239f9ef681a1c0a;Sampled=0",
      "x-envoy-upstream-service-time",
      "42",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "21",
      "Powered-By",
      "SGGateway",
    ]
  );
