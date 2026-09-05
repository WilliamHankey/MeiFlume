import { parseText } from '@/api/policies';

interface TextContentProps {
  text?: string;
}

// Renders plain text that uses one blank line between paragraphs and "- " for bullets
export const TextContent = ({ text }: TextContentProps) => {
  const blocks = parseText(text || '');

  if (blocks.paragraphs.length === 0 && blocks.lists.length === 0) {
    return null;
  }

  return (
    <>
      {blocks.paragraphs.map((paragraph, index) => (
        <p key={`p-${index}`} className="mb-4">
          {paragraph}
        </p>
      ))}
      {blocks.lists.map((list, index) => (
        <ul key={`l-${index}`} className="list-disc pl-6 mb-4 space-y-2">
          {list.items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      ))}
    </>
  );
};