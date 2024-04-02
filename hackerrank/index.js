const getEventsOrder = (team1, team2, events1, events2) => {
  const getNumber = (arr) => {
    const number = arr.filter((item) => parseInt(item));
const res = parseInt(number[0])
    return res * 1
  };

  let e1 = events1.map((event) => {
    const num = getNumber(event.split(' '));
    return num
  });

  let e2 = events2.map((event) => {
    const num = getNumber(event.split(' '));
    return num;
  });

  const sortedE1 = e1.sort();
  const sortedE2 = e2.sort();

  const combined = [...sortedE1, ...sortedE2];
  const sortedCombined = combined.sort();

  const sortedCombinedEvents = sortedCombined.map((event) => {
    if (sortedE1.includes(event)) {
      return (
        team1 +
        ' ' +
        events1.filter((item) => getNumber(item.split(' ')) == event)
      );
    } else {
      return (
        team2 +
        ' ' +
        events2.filter((item) => getNumber(item.split(' ')) == event)
      );
    }
  });

  console.log(sortedE1, sortedE2, sortedCombined);

  return sortedCombinedEvents.join(' ');
};

getEventsOrder(
  'team1',
  'team2',
  [
    'kjfrez tdcep qwxnhe 57 Y',
    'qgb jdbdbw 75 G',
    'mjyksou ynv vcaiwr 62 Y',
    'naxzca okzcb 43 Y',
    'pfoty mtn 8 G',
    'mjyksou ynv vcaiwr 72 S qgb jdbdbw',
    'ughs plplxva ixcwb 76 G',
    'vemqn qsegw 45 G',
  ],
  [
    'qezr nerz smirbsi 15 Y',
    'olrom mbozleh 50 Y',
    'qxymtd hobskb 33 G',
    'pkqozcy evg veytlsd 3 S qezr nerz smirbsi',
    ',adti zcycm 90+3 Y',
    'adti zcycm 32 G',
    'hceslkc ldiwh 90+4 G',
    'luuq kpdyjsw apgw 3 Y',
    'qezr nerz smirbsi 54 S hceslkc ldiwh',
    'olrom mbozleh 74 S xfy aqcj',
  ]
);
