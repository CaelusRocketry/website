import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.document()
            .title("Settings")
            .schemaType("settings")
            .documentId("settings")
        ),
      // Add a visual divider
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        (listItem) => !["settings"].includes(listItem.getId())
      ),
    ]);
