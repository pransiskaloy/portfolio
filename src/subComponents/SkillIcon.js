import React from 'react'
import './skill.css'

function SkillIcon(props) {
    const {imgIcon,prodName,bodyText,wid,heig} = props;
  return (
    <div className='container'>
        <div className='profile'>
            <img src={imgIcon} height={heig} width={wid}/>
            <div className='content'>
            <div className='header'>
                <img src={imgIcon} height={heig} width={wid}/>
                <div className='infos'>
                <h3 className='prodName'>{prodName}</h3>
                </div>
            </div>
            <div className='body'>
                <p>
                {bodyText}
                </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SkillIcon