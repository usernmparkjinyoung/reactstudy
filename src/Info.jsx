import React, { useState, useEffect } from "react";

const Info = () => {
    const [ name, setName ] = useState('');
    const [ nickname, setNickname ] = useState('');
    
    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickName = e => {
        setNickname(e.target.value);
    }

    useEffect(() => {
        console.log("랜더링 완료");
        // console.log(name, nickname);

        return () => {  // 컴포넌트가 언마운트되기전 or 업데이트되기전 
            console.log("랜더링전")
        }
    }, [name]);

    return (
        <>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickName} />
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </>
    )
}

export default Info;