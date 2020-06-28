import defaultResolve from "part:@sanity/base/document-actions";
import { PublishAction } from "part:@sanity/base/document-actions";

export default function resolveDocumentActions(props) {
  if (props.type == "settings") {
    return [PublishAction];
  } else {
    return [...defaultResolve(props)];
  }
}
