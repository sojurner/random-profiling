const poemistURL = 'https://www.poemist.com/api/v1/randompoems';

export interface IPoem {
  content: string;
  poet: string;
}

const parseContent = (poems: any[]): IPoem[] => {
  return poems.map(({ content, poet }) => ({
    content,
    poet: poet.name
  }));
};

const getRandomPoems = async () => {
  const response = await fetch(poemistURL);
  if (response.status === 200) {
    return parseContent(await response.json());
  } else {
    return { error: 'Something went wrong' };
  }
};

export { parseContent, getRandomPoems };

// [
//   {
//       "title": "Bluebird",
//       "content": "there's a bluebird in my heart that\nwants to get out\nbut I'm too tough for him,\nI say, stay in there, I'm not going\nto let anybody see\nyou.\nthere's a bluebird in my heart that\nwants to get out\nbut I pour whiskey on him and inhale\ncigarette smoke\nand the whores and the bartenders\nand the grocery clerks\nnever know that\nhe's\nin there.\n\nthere's a bluebird in my heart that\nwants to get out\nbut I'm too tough for him,\nI say,\nstay down, do you want to mess\nme up? \nyou want to screw up the\nworks? \nyou want to blow my book sales in\nEurope? \nthere's a bluebird in my heart that\nwants to get out\nbut I'm too clever, I only let him out\nat night sometimes\nwhen everybody's asleep.\nI say, I know that you're there,\nso don't be\nsad.\nthen I put him back,\nbut he's singing a little\nin there, I haven't quite let him\ndie\nand we sleep together like\nthat\nwith our\nsecret pact\nand it's nice enough to\nmake a man\nweep, but I don't\nweep, do\nyou?",
//       "url": "https://www.poemist.com/charles-bukowski/bluebird",
//       "poet": {
//           "name": "Charles Bukowski",
//           "url": "https://www.poemist.com/charles-bukowski"
//       }
//   },
//   {
//       "title": "Sonnet To Queen Elizabeth I Of England",
//       "content": "One thought, that is my torment and delight,\nEbbs and flows bittersweet within my heart\nAnd between doubt and hope rends me apart\nWhile peace and all tranquility take flight.\nTherefore, dear sister, should this letter dwell\nUpon my weighty need of seeing you,\nIt is that grief and pain shall be my due\nUnless my wait should end both swift and well.\nI've seen a ship's sails slackened by taut ropes\nOn the high tide at the harbour bar\nAnd a clear sky suddenly fill with cloud;\nLikewise fear and distress fill all my hopes,\nNot because of you, but for the times there are \nWhen Fortune doubly strikes on sail and shroud.",
//       "url": "https://www.poemist.com/mary-stuart/sonnet-to-queen-elizabeth-i-of-england",
//       "poet": {
//           "name": "Mary Stuart",
//           "url": "https://www.poemist.com/mary-stuart"
//       }
//   },
//   {
//       "title": "Hector The Collector",
//       "content": "Hector the Collector\nCollected bits of string,\nCollected dolls with broken heads\nAnd rusty bells that would not ring. Bent-up nails and ice-cream sticks,\nTwists of wires, worn-out tires,\nPaper bags and broken bricks.\nOld chipped vases, half shoelaces,\nGatlin' guns that wouldn't shoot,\nLeaky boasts that wouldn't float\nAnd stopped-up horns that wouldn't toot. Butter knives that had no handles,\nCopper keys that fit no locks\nRings that were too small for fingers,\nDried-up leaves and patched-up socks.\nWorn-out belts that had no buckles,\n'Lectric trains that had no tracks,\nAirplane models, broken bottles,\nThree-legged chairs and cups with cracks.\nHector the Collector\nLoved these things with all his soul--\nLoved them more then shining diamonds,\nLoved them more then glistenin' gold.\nHector called to all the people,\n'Come and share my treasure trunk!'\nAnd all the silly sightless people\nCame and looked ... and called it junk.",
//       "url": "https://www.poemist.com/shel-silverstein/hector-the-collector",
//       "poet": {
//           "name": "Shel Silverstein",
//           "url": "https://www.poemist.com/shel-silverstein"
//       }
//   },
//   {
//       "title": "Aftenstiernen",
//       "content": "Kiæk jeg vandrer Nattens Mulm imøde,\n    Hvor foran mig Livets Sol nedgaaer;\nThi bag Tidens Vinteraftenrøde\n    Smiler himmelsk Evighedens Vaar:\nHvad mig vredt nu truer i det Fierne,\nVenlig da vil tindre — Nannas Stierne.",
//       "url": "https://www.poemist.com/jens-baggesen/aftenstiernen",
//       "poet": {
//           "name": "Jens Baggesen",
//           "url": "https://www.poemist.com/jens-baggesen"
//       }
//   },
//   {
//       "title": "The Battle Of Naseby",
//       "content": "Oh! wherefore come ye forth, in triumph from the North, \nWith your hands, and your feet, and your raiment all red? \nAnd wherefore doth your rout send forth a joyous shout? \nAnd whence be the grapes of the wine-press which ye tread? \n\nOh, evil was the root, and bitter was the fruit, \nAnd crimson was the juice of the vintage that we trod; \nFor we trampled on the throng of the haughty and the strong, \nWho sate in the high places, and slew the saints of God. \n\nIt was about the noon of a glorious day of June, \nThat we saw their banners dance, and their cuirasses shine, \nAnd the Man of Blood was there, with his long essenced hair, \nAnd Astley, and Sir Marmaduke, and Rupert of the Rhine. \n\nLike a servant of the Lord, with his Bible and his sword, \nThe General rode along us to form us to the fight, \nWhen a murmuring sound broke out, and swell'd into a shout, \nAmong the godless horsemen upon the tyrant's right. \n\nAnd hark! like the roar of the billows on the shore, \nThe cry of battle rises along their charging line! \nFor God! for the Cause! for the Church! for the Laws! \nFor Charles King of England and Rupert of the Rhine! \n\nThe furious German comes, with his clarions and his drums, \nHis bravoes of Alsatia, and pages of Whitehall; \nThey are bursting on our flanks. Grasp your pikes, close your ranks; \nFor Rupert never comes but to conquer or to fall. \n\nThey are here! They rush on! We are broken! We are gone! \nOur left is borne before them like stubble on the blast. \nO Lord, put forth thy might! O Lord, defend the right! \nStand back to back, in God's name, and fight it to the last. \n\nStout Skippon has a wound; the centre hath given ground: \nHark! hark!--What means the trampling of horsemen on our rear? \nWhose banner do I see, boys? 'Tis he, thank God, 'tis he, boys, \nBear up another minute: brave Oliver is here. \n\nFast, fast, the gallants ride, in some safe nook to hide \nTheir coward heads, predestined to rot on Temple Bar; \nAnd he--he turns, he flies:--shame on those cruel eyes \nThat bore to look on torture, and dare not look on war. \n\nHo! comrades scour the plain; and, ere ye strip the slain, \nFirst give another stab to make your search secure, \nThen shake from sleeves and pockets their broad-pieces and lockets, \nThe tokens of the wanton, the plunder of the poor. \n\nFools! your doublets shone with gold, and your hearts were gay and bold, \nWhen you kissed your lily hands to your lemans to-day; \nAnd to-morrow shall the fox, from her chambers in the rocks, \nLead forth her tawny cubs to howl above the prey. \n\nWhere be your tongues that late mocked at heaven and hell and fate, \nAnd the fingers that once were so busy with your blades, \nYour perfum'd satin clothes, your catches and your oaths, \nYour stage-plays and your sonnets, your diamonds and your spades? \n\nDown, down, for ever down with the mitre and the crown, \nWith the Belial of the Court and the Mammon of the Pope; \nThere is woe in Oxford halls: there is wail in Durham's Stalls: \nThe Jesuit smites his bosom: the Bishop rends his cope. \n\nAnd She of the seven hills shall mourn her children's ills, \nAnd tremble when she thinks on the edge of England's sword; \nAnd the Kings of earth in fear shall shudder when they hear \nWhat the hand of God hath wrought for the Houses and the Word.",
//       "url": "https://www.poemist.com/thomas-babbingt-macaulay/the-battle-of-naseby",
//       "poet": {
//           "name": "Thomas Babbingt Macaulay",
//           "url": "https://www.poemist.com/thomas-babbingt-macaulay"
//       }
//   }
// ]
