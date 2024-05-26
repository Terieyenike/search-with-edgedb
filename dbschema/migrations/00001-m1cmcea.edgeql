CREATE MIGRATION m1cmcea6fp7kcs6yvj6f77fsoyunl6nhy5gdvcm73wztxsmvwkfwiq
    ONTO initial
{
  CREATE TYPE default::SearchItem {
      CREATE REQUIRED PROPERTY description: std::str {
          SET default := '';
      };
      CREATE REQUIRED PROPERTY imageId: std::str;
      CREATE REQUIRED PROPERTY name: std::str;
      CREATE REQUIRED PROPERTY price: std::int32;
  };
};
