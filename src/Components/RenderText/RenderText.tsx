"use client"

import Typography from '@mui/material/Typography';
import { FC } from 'react';

// Define types based on the provided JSON structure
interface Block {
  key: string;
  text: string;
  type: 'header-one' | 'header-two' | 'header-three' | 'unstyled';
  depth: number;
  inlineStyleRanges: any[];
  entityRanges: any[];
  data: any;
}

interface JsonData {
  blocks: Block[];
  entityMap: any;
}

// Function to render text blocks
const renderBlocks = (blocks: Block[]): JSX.Element[] => {
  return blocks.map((block) => {

    let className = '';
    if (block?.inlineStyleRanges?.length > 0) {
        className = block.inlineStyleRanges.map(style => style.style).join(' ');
    }
    console.log('className: ', className);
    const Component = block.type === 'header-one'
      ? Typography
      : block.type === 'header-two'
      ? Typography
      : block.type === 'header-three'
      ? Typography
      : Typography;

    const typographyProps: any = {
      variant: block.type === 'header-one'
        ? 'h1'
        : block.type === 'header-two'
        ? 'h2'
        : block.type === 'header-three'
        ? 'h3'
        : 'body1'
    };

    return (
      <Component 
      className={`${className} blog-text break-spaces`}
      key={block.key} {...typographyProps}
      sx={{
        direction: /[\u0600-\u06FF]/.test(block.text) ? 'rtl' : 'ltr',
        textAlign: /[\u0600-\u06FF]/.test(block.text) ? 'right' : 'left',
      }}
       component={block.type === 'header-one' ? 'h1' : block.type === 'header-two' ? 'h2' : block.type === 'header-three' ? 'h3' : 'p'}>
        {block.text}
      </Component>
    );
  });
};

// Component to render the JSON
const RenderJson: FC<{ json: string }> = ({ json }) => {
  const data: JsonData = JSON.parse(json);

  return (
    <div className='break-spaces'>
      {renderBlocks(data.blocks)}
    </div>
  );
};

export default RenderJson;