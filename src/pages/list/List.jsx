import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './list.css'
import SearchSideBox from '../../components/searchSideBox/SearchSideBox'

import SearchItem from '../../components/searchitem/SearchItem'
import EmailSubs from '../../components/emailSubs/EmailSubs'

const List = () => {
  const location = useLocation()
  const params = useParams()
  console.log(params.category);
  const [place, setPlace] = useState(location.state.place)
  const [date, setDate] = useState(location.state.date)
  const [pet, setPet] = useState(params.category)


  const petList1 = [
    {

      id: 1,
      name: 'Ace',
      breed: 'Pit Bull Type, Border Collie, Australian Cattle Dog',
      age: 5,
      description: 'Meet Ace. He is the sweetest boy. Loves cuddles and snacks! I love this dog so much but he is not happy sharing a home with our other pup and would love to be an only dog! He has anxiety since he was a puppy and is on medication for it. He was also just diagnosed with some arthritis (at the age of 2) and started gabapentin. If you would like to know more about this sweet boy please reach out',
      size: 'L',
      category: 'dog',
      gender: 'Male',
      start_date: '15/01/2023',
      end_date: '25/01/2023',
      thumbnail: 'https://getyourpet.com/photos/250140fd-3b25-422b-9c88-42ce8703697b/pet-photo-767893.png'
    },
    {
      id:2,
      name: 'Holmes',
      breed: 'Bulldog',
      age: 5,
      description: 'Holmes is a very happy and loving English Tricolor Blue Bulldog. He loves to cuddle up with people, play in the yard, and play with his rings. He is a very smart dog and eager to please. He is very loving and generally very laid back, but does get excited when it’s time to eat!',
      size: 'L',
      category: 'dog',
      gender: 'Male',
      start_date: '15/01/2023',
      end_date: '25/01/2023',
      thumbnail: 'https://getyourpet.com/photos/51ed97a5-afbf-4fe8-85e1-1c8302968a5e/pet-photo-747488.png'
    },
    {
      id:3,
      name: 'Balto',
      breed: 'Alaskan Malamute',
      age: 3,
      description: `Balto has a huge personality! He will talk to you if you talk to him, loves his walks, and his favorite thing is to lay out in the snow. Often nicknamed "Doctor Balto" because if anyone is upset or injured, he is the first to check in on you. He's the kind of dog that loves going out with you and also curling up to watch a movie with.`,
      size: 'XL',
      category: 'dog',
      gender: 'Male',
      start_date: '15/01/2023',
      end_date: '25/01/2023',
      thumbnail: 'https://getyourpet.com/photos/632e4cf9-701a-408e-aed2-cbde8e7f3116/pet-photo-765087.png'
    },
    {
      id:4,
      name: 'Simba',
      breed: 'German Shepherd Dog, Siberian Husky',
      age: 1,
      description: 'I recently became divorced, and we got the puppy together. He is a German shepherd and husky mix. He is very beautiful, but requires a lot of attention and needs training that I can’t provide for him. I prefer him to go somewhere that has a nice yard and people that will spend time with him that he deserves he can be food aggressive but over all loves everyone and other dogs too.',
      size: 'L',
      category: 'dog',
      gender: 'Male',
      start_date: '15/01/2023',
      end_date: '25/01/2023',
      thumbnail: 'https://getyourpet.com/photos/8fcafb87-c94a-4ed4-909b-3ad220600892/pet-photo-770921.png'
    },
    {
      id:5,
      name: 'Ace',
      breed: 'Pit Bull Type, Border Collie, Australian Cattle Dog',
      age: 5,
      description: 'Meet Ace. He is the sweetest boy. Loves cuddles and snacks! I love this dog so much but he is not happy sharing a home with our other pup and would love to be an only dog! He has anxiety since he was a puppy and is on medication for it. He was also just diagnosed with some arthritis (at the age of 2) and started gabapentin. If you would like to know more about this sweet boy please reach out',
      size: 'L',
      category: 'dog',
      gender: 'Male',
      start_date: '15/01/2023',
      end_date: '25/01/2023',
      thumbnail: 'https://getyourpet.com/photos/250140fd-3b25-422b-9c88-42ce8703697b/pet-photo-767893.png'
    },
    {
      id:6,
      name: 'Holmes',
      breed: 'Bulldog',
      age: 5,
      description: 'Holmes is a very happy and loving English Tricolor Blue Bulldog. He loves to cuddle up with people, play in the yard, and play with his rings. He is a very smart dog and eager to please. He is very loving and generally very laid back, but does get excited when it’s time to eat!',
      size: 'L',
      category: 'dog',
      gender: 'Male',
      start_date: '15/01/2023',
      end_date: '25/01/2023',
      thumbnail: 'https://getyourpet.com/photos/51ed97a5-afbf-4fe8-85e1-1c8302968a5e/pet-photo-747488.png'
    },
    {
      id:7,
      name: 'Balto',
      breed: 'Alaskan Malamute',
      age: 3,
      description: `Balto has a huge personality! He will talk to you if you talk to him, loves his walks, and his favorite thing is to lay out in the snow. Often nicknamed "Doctor Balto" because if anyone is upset or injured, he is the first to check in on you. He's the kind of dog that loves going out with you and also curling up to watch a movie with.`,
      size: 'XL',
      category: 'dog',
      gender: 'Male',
      start_date: '15/01/2023',
      end_date: '25/01/2023',
      thumbnail: 'https://getyourpet.com/photos/632e4cf9-701a-408e-aed2-cbde8e7f3116/pet-photo-765087.png'
    },
    {
      id:8,
      name: 'Simba',
      breed: 'German Shepherd Dog, Siberian Husky',
      age: 1,
      description: 'I recently became divorced, and we got the puppy together. He is a German shepherd and husky mix. He is very beautiful, but requires a lot of attention and needs training that I can’t provide for him. I prefer him to go somewhere that has a nice yard and people that will spend time with him that he deserves he can be food aggressive but over all loves everyone and other dogs too.',
      size: 'L',
      category: 'dog',
      gender: 'Male',
      start_date: '15/01/2023',
      end_date: '25/01/2023',
      thumbnail: 'https://getyourpet.com/photos/8fcafb87-c94a-4ed4-909b-3ad220600892/pet-photo-770921.png'
    },
    {
      id:9,
      name: 'Mya',
      breed: 'Manx',
      age: 5,
      description: 'Mya is sweet towards humans. We found her through a breeder at 3 months old. We lost our 19-year old cat October 2021, and thought Mya needed a new buddy. Unfortunately, she developed an aggressive behavior towards our kitten. Mya needs a new home where she would be the only pet. And she’s a good micer, she will catch a mouse and show it to you as a gift. 😀 She is spayed, microchipped and current on vaccinations. She’s primarily an indoor cat but plays in our backyard that’s fully fenced. She loves to snuggle and would happily sit with you to keep you company.',
      size: '-',
      category: 'cat',
      gender: 'Female',
      start_date: '15/01/2023',
      end_date: '25/01/2023',
      thumbnail: 'https://getyourpet.com/photos/12ea1327-0882-44c9-81f9-090d6a112a76/pet-photo-742118.png'
    },
    {
      id:10,
      name: 'Zelda',
      breed: '-',
      age: 8,
      description: `Zelda is my comfort kitty. She is a self care kitty that takes care of her own. She is patient, clean, and very quiet unless you open a can of tuna. She will go nuts for that. She's her own cat and not a cuddler but she likes to hang out. When she wants attention she will flop on her side next to me and sometimes knock out her breath when she does it. She's a super dork and I'll miss her. She loves hunting her sis for fun.`,
      size: '-',
      category: 'cat',
      gender: 'Female',
      start_date: '15/01/2023',
      end_date: '25/01/2023',
      thumbnail: 'https://getyourpet.com/photos/f06050e3-5bd8-48f8-ba03-181d4dc495aa/pet-photo-752522.png'
    },
    {
      id:11,
      name: 'AJ',
      breed: 'American / Domestic Shorthair, Siamese',
      age: 2,
      description: `AJ has a big boy with a big, wonderful personality. He is part Siamese and can have a great conversation with anyone. He comes when he’s called and can tell you what he wants! He always uses his litter box and loves his cat trees! He’s a big lover!`,
      size: '-',
      category: 'cat',
      gender: 'Male',
      start_date: '15/01/2023',
      end_date: '25/01/2023',
      thumbnail: 'https://getyourpet.com/photos/4f93393b-83e2-4ce8-bfa0-6e71f560f774/pet-photo-766579.png'
    },
    {
      id:12,
      name: 'Arlene',
      breed: 'Siamese, American / Domestic Shorthair',
      age: 12,
      description: `Arlene is a friendly, affectionate cat who likes to snuggle and give kitty kisses. She loves to curl up in a cozy spot for a nap or chase her toys. We adopted her from a shelter when she was about two years old, and she has been a central part of our family for the past ten years. It is very difficult to say goodbye, but we recently found out that our youngest child has a severe cat allergy. Arlene would do best in a home where she gets lots of cuddles and everyone is a teenager or older.`,
      size: '-',
      category: 'cat',
      gender: 'Female',
      start_date: '15/01/2023',
      end_date: '25/01/2023',
      thumbnail: 'https://getyourpet.com/photos/54921680-1554-4405-b998-5db5825eb8f1/pet-photo-759562.png'
    },
    {
      id:13,
      name: 'Hashi',
      breed: 'Siamese, American / Domestic Shorthair',
      age: 3,
      description: `Hashi is the sweetest and most cuddly cat I have encountered. He Loves to play. He is a bit scared of people at first, but warms up quickly. He also has some wild bouts of hyperness. He is so funny.`,
      size: '-',
      category: 'cat',
      gender: 'Male',
      start_date: '15/01/2023',
      end_date: '25/01/2023',
      thumbnail: 'https://getyourpet.com/photos/f78eca88-273e-40b4-b541-e4cea754ee04/pet-photo-768265.png'
    },
    
  ]

  const petList = petList1.filter(({category})=> category === pet)



  return (
    <div>
      <Navbar/>
      <Header type={'list'} petType={pet}/>
      <div className="listContainer">
        <div className="listWrapper">
          <SearchSideBox pet={pet} place={place} date_={date}/>
          <div className="listResult">
            {petList.length > 0 ? petList.map((item)=> {
              return <SearchItem key={item.id} item={item}/>
            }) : <h1>
              Lo siento, proba con otra categoria de mascotas!</h1>}
          </div>
        </div>
      </div>
      <EmailSubs/>
      <Footer/>
    </div>
  )
}

export default List