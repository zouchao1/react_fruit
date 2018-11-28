import styled from 'styled-components'
export const DeTailBox = styled.div`

width:100%;
height:100%;
background:white;
`

export const DetailDiv = styled.div`
display:flex;
justify-content:space-between;
align-content:center;
flex-direction:column;
h5{
    line-height: .8rem;
    padding-right: .32rem;
    font-size: .5rem;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis; 
}
div{
    span{
            font-size: .36rem;
    line-height: .36rem;
    background: #fff;
    display: inline-block;
    padding: 0.13rem .2rem 0.11rem;
    border: 1px solid #1fa44b;
    border-radius: 0.12rem 0 0.12rem 0;
    color: #1fa44b;
    margin-right: .25rem;
    font-style: normal;
    }
    small{
    padding-right: .32rem;
    font-size: .38rem;
    color: #808080;
    padding-top: .25rem;
    line-height: .8rem;
    }
   
}
 section{
      font-size: .56rem;
      color: #ff6353;
      span{    color: #333;
      line-height: .66rem;
      font-size: .26rem;
      display: inline-block;
      float:right;
}
    }
    p{
      color: #ccc;
      font-size: .34rem;
      margin: .34rem;
    }
    h4{
            background: #f4f4f4;;
            height:.233333rem;
            width:100%;
            margin-top: .34rem;
    }
`