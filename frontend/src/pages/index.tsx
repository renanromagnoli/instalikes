import Head from 'next/head'
import Image from 'next/image'
import { ContainerComments } from '../components/ContainerComments'
import { ContainerLikes } from '../components/ContainerLikes'
import { ContainerProfileMain } from '../components/ProfileContainer'
import { api } from '../services/api'


type FriendsProfileProps = {
  id: string,
  img: string,
  name: string,
  likes: number,
  comments: number
}

type MainProfileProps = {
  mainProfile: {
    id: string,
    img: string,
    likes: number,
    comments: number,
    friends: FriendsProfileProps[]
  }
}

export default function Home(props: MainProfileProps) {
  return (
    <div>
      <div>{JSON.stringify(props.mainProfile.friends[0].img)}</div>
      <ContainerProfileMain 
        id={props.mainProfile.id} 
        img={props.mainProfile.img}
        likes={props.mainProfile.likes}
        comments={props.mainProfile.comments}
      />
      <ContainerLikes 
        id={props.mainProfile.friends[0].id} 
        img={props.mainProfile.friends[0].img}
        name={props.mainProfile.friends[0].name}
        likes={props.mainProfile.friends[0].likes}
      />
      <ContainerComments/>
    </div>
  )
}

export async function getServerSideProps() {
  
  const { data } = await api.get('mainProfile')
  
  return {
    props: {
      mainProfile: data,
    }
  }
}