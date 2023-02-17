import { animation, style, animate, trigger, transition, useAnimation, state, query } from '@angular/animations';

export const transitionAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}'
  }),
  animate('{{ time }}')
]);

export const transformRight = [
  trigger('inOutRight',[
    state('in', style({
      transform: 'translateX(0)',
      opacity: 1
    })),
    state('out', style({
      transform: 'translateX(100vw)',
      opacity: 0
    })),
    transition('in => out', [
      animate('1.5s ease-in')
    ]),
    transition('out => in', [
      animate('0.5s ease-in')
    ])
  ])
];
export const transformLeft = [
  trigger('inOutLeft',[
    state('in', style({
      transform: 'translateX(0)',
      opacity: 1

    })),
    state('out', style({
      transform: 'translateX(-100vw)',
      opacity: 0
    })),
    transition('in => out', [
      animate('1.5s ease-in')
    ]),
    transition('out => in', [
      animate('0.5s ease-in')
    ])
  ])
];

export const transformUp = [
  trigger('inOutUp',[
    state('in', style({
      transform: 'translateY(0)',
      // opacity: 1
    })),
    state('out', style({
      transform: 'translateY(100vw)',
      // opacity: 0
    })),
    transition('in => out', [
      animate('1.5s ease-in')
    ]),
    transition('out => in', [
      animate('0.5s ease-in')
    ])
  ])
];
export const transformDown = [
  trigger('inOutDown',[
    state('in', style({
      transform: 'translateY(0)',
      // opacity: 1

    })),
    state('out', style({
      transform: 'translateY(-100vw)',
      // opacity: 0
    })),
    transition('in => out', [
      animate('1.5s ease-in')
    ]),
    transition('out => in', [
      animate('0.5s ease-in')
    ])
  ])
];
export const fadeEffect = [
  trigger('fadeEffect', [
      state('visible', style({
        opacity: 1
      })),
      state('fade', style({
        opacity: 0
      })),
      transition('visible => fade', [
        animate('1.5s ease-in')
      ]),
      transition('fade => visible', [
        animate('1.5s ease-in')
      ])
    ]
  )
];
export const openDoorRight = [
  trigger('openRight', [
      state('close', style({
        transformOrigin: 'right',
        transform: 'perspective(50vw) rotateY(0deg)'
      })),
      state('open', style({
        transformOrigin: 'right',
        transform: 'perspective(50vw) rotateY(-90deg)'
      })),
      transition('close => open', [
        animate('1s ease-in')
      ]),
      transition('open => close', [
        animate('0.5s ease-in')
      ])
    ]
  )
];
export const openDoorLeft = [
  trigger('openLeft', [
      state('close', style({
        transformOrigin: 'left',
        transform: 'perspective(50vw) rotateY(0deg)'
      })),
      state('open', style({
        transformOrigin: 'left',
        transform: 'perspective(50vw) rotateY(90deg)'
      })),
      transition('close => open', [
        animate('1s ease-in')
      ]),
      transition('open => close', [
        animate('0.5s ease-in')
      ])
    ]
  )
];
export const transformRoll = [
  trigger('roll',[
    state('in', style({
      transformOrigin: 'center',
      transform: 'translateX(-60vw) rotate(0turn)',
    })),
    state('out', style({
      transformOrigin: 'center',
      transform: 'translateX(100vw) rotate(1turn)'
    })),
    transition('in => out', [
      animate('1.5s ease-in')
    ]),
    transition('out => in', [
      animate('1.5s ease-in')
    ])
  ])
];

// export const closeMenu =[
//   trigger('menu', [
//     transition('* => void', [
//       // make X from the first and third line' and hide the middle
//       query('.bar1', animate(1000, style({ transform: ' translate(0, 11px) rotate(45deg)', color: 'red' }))),
//       query('.bar2', animate(1000, (style({ opacity: 0 })))),
//
//       // animate the inner elements in, one by one
//       query('.bar3', animate(1000, style({ transform: ' translate(0, -11px) rotate(-45deg)', color: 'red' }))),
//     ]),
//     transition('void => *', [
//       // make X from the first and third line' and hide the middle
//       query('.bar1', animate(1000, style({ transform: 'rotate(0deg)' }))),
//       query('.bar2', style({ opacity: 1 })),
//
//       // animate the inner elements in, one by one
//       query('.bar3', animate(1000, style({ transform: 'rotate(0deg)' }))),
//     ]),
//   ])
// ]
