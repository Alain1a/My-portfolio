// home.js

import React, { useState } from 'react';
// import { useEffect, useState } from 'react'
import axios from 'axios'
// import './home.css';
import lion from '../images/lion.jpeg';
import tiger from '../images/tiger.jpg';
import elephant2 from '../images/elephant2.jpg';
import girafe from '../images/girafe.webp';
import wolf from '../images/wolf.webp';
import zebra from '../images/zebra.avif';
import leopard from '../images/leopard.jpeg';
import buffalo from '../images/buffalo.jpeg';
import snake from '../images/snake.jpg';
import gorilla from '../images/gorilla.jpeg';
import shark from '../images/shark.webp';
import Fox from '../images/Fox.jpg';
import data from '../components/data';
import facebook from '../images/facebook.png';
import twiter from '../images/twiter.png';
import instagram from '../images/instagram.jpeg';




const Home = () => {

  return (
    <div style={{ background: 'black', height: '2600px' }}>
      <body>

        <center><h1 style={{ marginTop: '2%', background: 'red' }}>MY ANIMAL BLOG</h1></center>
        <div style={{ width: '1400px', height: '1000px', display: 'flex', justifyContent: 'space-between', marginTop: '5%', marginLeft: '90px' }}>

          <div style={{ borderRadius: '5%', background: 'pink', height: '500px' }}>
            <div>
              <img src={lion} alt="" style={{ width: '400px', borderRadius: '5%' }} />
            </div>
            <div style={{ marginTop: '10%', width: '400px' }}>
              <text>Lions are highly territorial and occupy the same area for generations. Females actively defend their territories against other females, while resident males protect prides from rival coalitions. Territory size depends on prey abundance, as well as access to water and denning sites.</text>
            </div>
          </div>

          <div style={{ background: 'pink', borderRadius: '5%', height: '500px' }}>
            <div>
              <img src={tiger} alt="" style={{ width: '400px', borderRadius: '5%' }} />
            </div>
            <div style={{ marginTop: '10%', width: '400px' }}>
              <text>Tigers are territorial and usually solitary in nature. Their social system is connected through visual signals, scent marks and vocalizations. Tigers are usually solitary in nature, interacting briefly only for mating purposes and occasionally to share their kill.</text>
            </div>
          </div>

          <div style={{ background: 'pink', borderRadius: '5%', height: '500px' }}>
            <div>
              <img alt='' src={snake} style={{ width: '400px', borderRadius: '5%', }} />
            </div>
            <div style={{ marginTop: '10%', width: '400px' }}>
              <text>In most cases, snakes will move away when approached. Snakes do not charge or attack people, with the exception of racers that usually enter a state of panic and engage in a behavior called “periscoping,” in which they lift their head above the grass to look for danger and then duck down.</text>
            </div>
          </div>

        </div>
        
        <div style={{ marginTop: '-30%', height: '550px', marginLeft: '90px' }}>
<button type='button' className="w-40 bg-pink-500 rounded-full fixed mt-50 ml-[85%]"> Whatsapp Us</button>
          <button type='button' style={{ background: 'orange', width: '10%', color: 'white', borderRadius: '20px', }}>SHOWMORE</button>
        </div>

        <div style={{ width: '1400px', height: '1000px', display: 'flex', justifyContent: 'space-between', marginTop: '-30%', marginLeft: '90px' }}>
          <div style={{ borderRadius: '5%', background: 'pink', height: '500px' }} >

            <div>

              <img src={girafe} alt='' style={{ width: '400px', borderRadius: '5%', height: '300px' }} />
            </div>
            <div style={{ marginTop: '10%', width: '400px' }}>
              <text>The giraffe spend most of the day and part of the night feeding, especially the early morning and late afternoon. In the summer when food is abundant, the giraffe have more time during the day to chew their cud and lie down. The males spend part of the day fighting with each other.</text>
            </div>
          </div>
          <div style={{ borderRadius: '5%', background: 'pink', height: '500px' }}>
            <div>
              <img alt='' src={wolf} style={{ width: '400px', borderRadius: '5%', height: '300px' }} />
            </div>
            <div style={{ marginTop: '10%', width: '400px' }}>
              <text>Wolves are complex, highly intelligent animals who are caring, playful, and above all devoted to family. Only a select few other species exhibit these traits so clearly. Just like elephants, gorillas and dolphins, wolves educate their young, take care of their injured and live in family groups</text>
            </div>
          </div>

          <div style={{ borderRadius: '5%', background: 'pink', height: '500px' }}>
            <div>
              <img alt='' src={zebra} style={{ width: '400px', borderRadius: '5%', height: '300px' }} />
            </div>
            <div style={{ marginTop: '10%', width: '400px' }}>
              <text>Zebras are social animals that spend time in herds. They graze together, primarily on grass, and even groom one another. Plains zebras are the most common species. They live in small family groups consisting of a male (stallion), several females, and their young.</text>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '-30%', height: '550px', marginLeft: '90px' }}>
          <button type='button' style={{ background: 'orange', width: '10%', color: 'white', borderRadius: '20px', }}>SHOWMORE</button>
        </div>

        <div style={{ width: '1400px', height: '1000px', display: 'flex', justifyContent: 'space-between', marginTop: '-30%', marginLeft: '90px' }}>
          <div style={{ borderRadius: '5%', background: 'pink', height: '500px' }} >
            <div>
              <img alt='' src={leopard} style={{ width: '400px', borderRadius: '5%', height: '300px' }} />
            </div>
            <div style={{ marginTop: '10%', width: '400px' }}>
              <text>Leopards are very solitary and spend most of their time alone. They each have their own territory, and leave scratches on trees, urine scent marks and poop to warn other leopards to stay away! Males and females will cross territories, but only to mate.</text>
            </div>
          </div>
          <div style={{ borderRadius: '5%', background: 'pink', height: '500px' }} >
            <div>
              <img alt='' src={buffalo} style={{ width: '400px', borderRadius: '5%', height: '300px' }} />
            </div>
            <div style={{ marginTop: '10%', width: '400px' }}>
              <text>Buffalo prefer to rest in the open, except in extreme heat or when disturbed by humans. Buffalo visit water at least once/day. Average daily movement is 1.2-8 km. Breeding herds travel 2-3 times as far per day as do bachelor herds, and "pathfinder" individuals usually guide the herds.</text>
            </div>
          </div>
          <div style={{ borderRadius: '5%', background: 'pink', height: '500px' }}   >
            <div>
              <img src={elephant2} alt="" style={{ width: '400px', borderRadius: '5%' }} />
            </div>
            <div style={{ marginTop: '10%', width: '400px' }}>
              <text>Elephants are usually peaceful animals. Females may, however, be aggressive when young calves are present and bulls can be exceptionally aggressive during musth. All elephants may become aggressive when sick, injured or harassed.</text>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '-30%', height: '550px', marginLeft: '90px' }}>
          <button type='button' style={{ background: 'orange', width: '10%', color: 'white', borderRadius: '20px', }} >SHOWMORE</button>
        </div>
        <div style={{ width: '1400px', height: '1000px', display: 'flex', justifyContent: 'space-between', marginTop: '-30%', marginLeft: '90px' }}>
          <div style={{ borderRadius: '5%', background: 'pink', height: '500px' }} >
            <div>
              <img src={gorilla} alt="" style={{ width: '400px', borderRadius: '5%' }} />
            </div>
            <div style={{ marginTop: '10%', width: '400px' }}>
              <text>They are unaggressive and even shy unless provoked. They are calmer and more persistent than chimpanzees; though not as adaptable, gorillas are highly intelligent and capable of problem solving. Both species are hunted for their body parts and meat, and their habitat is disappearing.</text>
            </div>
          </div>
          <div style={{ borderRadius: '5%', background: 'pink', height: '500px' }}>
            <div>
              <img src={Fox} alt="" style={{ width: '400px', borderRadius: '5%', height: '250px' }} />
            </div>
            <div style={{ marginTop: '10%', width: '400px' }}>
              <text>Behaviour. Foxes are mainly nocturnal (night-time) hunters, being most active from dusk until dawn. They also occupy well-defined home ranges that are marked with scents including urine, droppings and anal gland secretions.</text>
            </div>
          </div>
          <div style={{ borderRadius: '5%', background: 'pink', height: '500px' }}>
            <div>
              <img src={shark} alt="" style={{ width: '400px', borderRadius: '5%', height: '250px' }} />
            </div>
            <div style={{ marginTop: '10%', width: '400px' }}>
              <text>Sharks circle their prey, disconcertingly appearing seemingly out of nowhere and frequently approaching from below. Feeding behaviour is stimulated by numbers and rapid swimming when three or more sharks appear in the presence of food. Activity progresses from tight circling to rapid crisscross passes.</text>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '-30%', height: '1px', marginLeft: '90px' }}>
          <button type='button' style={{ background: 'orange', width: '10%', color: 'white', borderRadius: '20px', }} >SHOWMORE</button>
        </div>

      </body>




    </div>



  );
}

export default Home;
