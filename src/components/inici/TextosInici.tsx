import type { FC } from 'react';
import type { textIniciT } from '../../lib/types';

interface Props {
  textosInici: textIniciT[];
  classesClaus: string;
}

const TextosIniciComponent: FC<Props> = ({ textosInici, classesClaus }) => {
  return (
    <div id='textInici' className='pt-4 px-8 pb-12 text-lg flex flex-col gap-6'>
      {textosInici.map(({ text, claus, id }) => {
        if (claus && claus.length > 0) {
          claus
            .filter((clau) => text.includes(clau))
            .forEach((clau) => {
              const htmlClau = ` <span class='${classesClaus}'>${clau}</span> `;
              text = text.replace(clau, htmlClau);
            });
          return <p key={id} dangerouslySetInnerHTML={{ __html: text }} />;
        }
        return <p key={id}>{text}</p>;
      })}
    </div>
  );
};

export default TextosIniciComponent;
