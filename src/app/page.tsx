'use client';
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect ,useState} from 'react'
// import top from 'public\top.png';
export default function Home() {
  const [count,setCount]=useState(0);
useEffect(()=>{
  console.log('hello')
},[])
function increase(){
  setCount(count=>count+1);
}
function decrease(){
  if(count===0){
    alert('Sorry , can not go below zero!!');
  }else{
    setCount(count=>count-1);
  }
}
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>
      <img src='/top.png' alt="top" width={"60px"} onClick={increase}/>
    <h1> {count}</h1>
      <img src='/down.png' alt="down" width={"60px"} onClick={decrease} />
    </main>
  )
}
