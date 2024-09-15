import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Section title="Examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === 'components'}
          onSelect={() => handleSelect('components')}
        >
          {CORE_CONCEPTS[0].title}
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onSelect={() => handleSelect('jsx')}
        >
          {CORE_CONCEPTS[1].title}
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onSelect={() => handleSelect('props')}
        >
          {CORE_CONCEPTS[2].title}
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'state'}
          onSelect={() => handleSelect('state')}
        >
          {CORE_CONCEPTS[3].title}
        </TabButton>
      </menu>
      <div id="tab-content">
        {!selectedTopic && <p>Please Select a Topic!</p>}
        {selectedTopic && (
          <>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </>
        )}
      </div>
    </Section>
  );
}
