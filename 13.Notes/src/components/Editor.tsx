import ReactMde from "react-mde";
import Showdown from "showdown";
import { useState } from "react";

type Note = {
  id: string;
  body: string;
};

enum SelectedTab {
    write="write",
    preview="preview"
  }

export default function Editor(props: {
  currentNote: Note;
  updateNote: (text: string) => void;
}) {
  const [selectedTab, setSelectedTab] = useState<SelectedTab|undefined>(SelectedTab.write);

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <section className="pane editor">
        <ReactMde
            value={props.currentNote.body}
            onChange={props.updateNote}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab as ((tab: "write"|"preview") => void | undefined)}
            generateMarkdownPreview={(markdown)=>
                Promise.resolve(converter.makeHtml(markdown))
            }
            minEditorHeight={80}
            heightUnits="vh"
        />
    </section>
  );
}
