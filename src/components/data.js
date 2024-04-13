// home.js

import React, { useState } from 'react';
// import './home.css';
import lion from '../images/lion.jpeg';
import tiger from '../images/tiger.jpg';
import elephant from '../images/elephant.jpeg';
import girafe from '../images/girafe.webp';
import wolf from '../images/wolf.webp';
import zebra from '../images/zebra.avif';
import leopard from '../images/leopard.jpeg';
import buffalo from '../images/buffalo.jpeg';
import snake from '../images/snake.jpg';
import gorilla from '../images/gorilla.jpeg';
import shark from '../images/shark.webp';
import Fox from '../images/fox.jpeg';

const data = {
  carddata: [

    {
      title: 'lion behavior',
      description: 'Lions are highly territorial and occupy the same area for generations. Females actively defend their territories against other females, while resident males protect prides from rival coalitions. Territory size depends on prey abundance, as well as access to water and denning sites.',
      photo: lion
    },
    {
      title: 'Tiger behavior',
      description: 'Tigers are territorial and usually solitary in nature. Their social system is connected through visual signals, scent marks and vocalizations. Tigers are usually solitary in nature, interacting briefly only for mating purposes and occasionally to share their kill.',
      photo: tiger
    },
    {
      title: 'Snake behavior',
      description: 'In most cases, snakes will move away when approached. Snakes do not charge or attack people, with the exception of racers that usually enter a state of panic and engage in a behavior called “periscoping,” in which they lift their head above the grass to look for danger and then duck down.',
      photo: snake
    },
    {
      title: 'Giraffe behavior',
      description: 'The giraffe spend most of the day and part of the night feeding, especially the early morning and late afternoon. In the summer when food is abundant, the giraffe have more time during the day to chew their cud and lie down. The males spend part of the day fighting with each other.',
      photo: girafe
    },
    {
      title: 'Wolf behavior',
      description: 'Wolves are complex, highly intelligent animals who are caring, playful, and above all devoted to family. Only a select few other species exhibit these traits so clearly. Just like elephants, gorillas and dolphins, wolves educate their young, take care of their injured and live in family groups',
      photo: wolf
    },
    {
      title: 'Zebra behavior',
      description: 'Zebras are social animals that spend time in herds. They graze together, primarily on grass, and even groom one another. Plains zebras are the most common species. They live in small family groups consisting of a male (stallion), several females, and their young.',
      photo: zebra
    },
    {
      title: 'Leopard behavior',
      description: '>Leopards are very solitary and spend most of their time alone. They each have their own territory, and leave scratches on trees, urine scent marks and poop to warn other leopards to stay away! Males and females will cross territories, but only to mate.',
      photo: leopard
    },
    {
      title: 'Buffalo behavior',
      description: 'Buffalo prefer to rest in the open, except in extreme heat or when disturbed by humans. Buffalo visit water at least once/day. Average daily movement is 1.2-8 km. Breeding herds travel 2-3 times as far per day as do bachelor herds, and "pathfinder" individuals usually guide the herds.',
      photo: buffalo
    },
   
    {
      title: 'gorilla behavior',
      description: 'They are unaggressive and even shy unless provoked. They are calmer and more persistent than chimpanzees; though not as adaptable, gorillas are highly intelligent and capable of problem solving. Both species are hunted for their body parts and meat, and their habitat is disappearing.',
      photo: gorilla
    },
    {
      title: 'Shark behavior',
      description: 'Sharks circle their prey, disconcertingly appearing seemingly out of nowhere and frequently approaching from below. Feeding behaviour is stimulated by numbers and rapid swimming when three or more sharks appear in the presence of food. Activity progresses from tight circling to rapid crisscross passes.',
      photo: shark
    },
    {
      title: 'Fox behavior',
      description: 'Behaviour. Foxes are mainly nocturnal (night-time) hunters, being most active from dusk until dawn. They also occupy well-defined home ranges that are marked with scents including urine, droppings and anal gland secretions.',
      photo: Fox
    },
    {
      title: 'Gorilla behavior',
      description: 'They are unaggressive and even shy unless provoked. They are calmer and more persistent than chimpanzees; though not as adaptable, gorillas are highly intelligent and capable of problem solving. Both species are hunted for their body parts and meat, and their habitat is disappearing.',
      photo: gorilla
    },
    {
      title: 'lion behavior',
      description: 'Lions are highly territorial and occupy the same area for generations. Females actively defend their territories against other females, while resident males protect prides from rival coalitions. Territory size depends on prey abundance, as well as access to water and denning sites.',
      photo: lion
    },
    {
      title: 'Tiger behavior',
      description: 'Tigers are territorial and usually solitary in nature. Their social system is connected through visual signals, scent marks and vocalizations. Tigers are usually solitary in nature, interacting briefly only for mating purposes and occasionally to share their kill.',
      photo: tiger
    },
    {
      title: 'Snake behavior',
      description: 'In most cases, snakes will move away when approached. Snakes do not charge or attack people, with the exception of racers that usually enter a state of panic and engage in a behavior called “periscoping,” in which they lift their head above the grass to look for danger and then duck down.',
      photo: snake
    },
    {
      title: 'Giraffe behavior',
      description: 'The giraffe spend most of the day and part of the night feeding, especially the early morning and late afternoon. In the summer when food is abundant, the giraffe have more time during the day to chew their cud and lie down. The males spend part of the day fighting with each other.',
      photo: girafe
    },
    {
      title: 'Wolf behavior',
      description: 'Wolves are complex, highly intelligent animals who are caring, playful, and above all devoted to family. Only a select few other species exhibit these traits so clearly. Just like elephants, gorillas and dolphins, wolves educate their young, take care of their injured and live in family groups',
      photo: wolf
    },
    {
      title: 'Zebra behavior',
      description: 'Zebras are social animals that spend time in herds. They graze together, primarily on grass, and even groom one another. Plains zebras are the most common species. They live in small family groups consisting of a male (stallion), several females, and their young.',
      photo: zebra
    },
    {
      title: 'lion behavior',
      description: 'Lions are highly territorial and occupy the same area for generations. Females actively defend their territories against other females, while resident males protect prides from rival coalitions. Territory size depends on prey abundance, as well as access to water and denning sites.',
      photo: lion
    },
    {
      title: 'Tiger behavior',
      description: 'Tigers are territorial and usually solitary in nature. Their social system is connected through visual signals, scent marks and vocalizations. Tigers are usually solitary in nature, interacting briefly only for mating purposes and occasionally to share their kill.',
      photo: tiger
    },
    // <button type='button' className="w-40 bg-green-300 rounded-full fixed mt-50 ml-[70%]"> Whatsapp Us</button>
  ]
}

export default data;