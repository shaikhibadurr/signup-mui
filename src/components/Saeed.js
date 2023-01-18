import React, { useState } from 'react'



export default function AddProductForm() {
  const [videoList, setVideoList] = useState([])
  console.log(videoList)

  const handleAddVideo = () => {
    const newVideo = {
      isFeaturedVideo: false,
      videoUrl: 'https://www.sibad.com'
    }
    setVideoList(items => ([...items, newVideo]))
  }

  return (
    <div>
      <button onClick={handleAddVideo}>Add Video</button>
      {videoList.map((item, index) => <VideoItem key={index} data={item} index={index} videoList={videoList} setVideoList={setVideoList}/>)}
    </div>
  )
}


// VIDEO ITEM
function VideoItem({data, index, setVideoList,videoList}){
  
  const handleChange = (e) => {
    setVideoList((items)=>{
      
    })
  }

  return (
    <div>
      <p defaultValue={data?.videoUrl} onClick={handleChange}>Para: {index}</p>
    </div>
  )
}