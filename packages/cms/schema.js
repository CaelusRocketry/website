// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import picture from "./schemas/picture";
import settings from "./schemas/settings";
import post from "./schemas/post";
import member from "./schemas/member";
import project, { statistic } from "./schemas/project";
import event from "./schemas/event";
import sponsor from "./schemas/sponsor";
import about from "./schemas/about";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    picture,

    settings,

    post,

    member,

    project,
    statistic,

    event,

    sponsor,

    about,
  ]),
});
