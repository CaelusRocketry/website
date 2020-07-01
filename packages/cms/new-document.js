import S from "@sanity/base/structure-builder";

export default [
  ...S.defaultInitialValueTemplateItems().filter(
    (listItem) => !["settings"].includes(listItem.getId())
  ),
];
