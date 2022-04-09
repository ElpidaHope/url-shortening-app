import {  useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { UrlShortnerStyled } from "../styles/UrlShortner.styled";

const UrlShortner = () => {
  const [longUrl, setLongUrl] = useState(null);
  const searchUrl = useRef(null);
  const shortUrl = useRef(null);
  const [obtainedUrl, setObtainedUrl] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    if (longUrl) {
      fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`)
        .then(response => response.json())
        .then(data => setObtainedUrl(prev => [...prev, {
          longUrl: data.result.original_link,
          shortUrl: data.result.full_short_link
        }]))
    }
  }, [longUrl])

  const getShortUrl = () => {
    if (searchUrl.current.value !== '') {
      setLongUrl(searchUrl.current.value)
      searchUrl.current.value = ''
      setIsEmpty(false)
    }
    else {
      setIsEmpty(true)
    }
  }
  useEffect(() => {
    const storedUrl = JSON.parse(localStorage.getItem('urlList'));
    if (storedUrl) {
      setObtainedUrl(storedUrl)
    }
  },[]);

  useEffect(() => {
    localStorage.setItem('urlList', JSON.stringify(obtainedUrl))
  }, [obtainedUrl]);


  
  return (
    <UrlShortnerStyled>
      <div className="input-url">
        <div className="textarea">
          <input type="text" placeholder="Shorten a link here..." ref={searchUrl} className={isEmpty ? 'error' : null}/>
          {isEmpty && <small>Please add a link</small>}
        </div>
        <button onClick={() => getShortUrl()}>Shorten it!</button>
      </div>
      <div className="url-list">
        {obtainedUrl && obtainedUrl.map(eachUrl => (
          <div className="each-url" key={nanoid()}>
            <p>{eachUrl.longUrl}</p>
            <div className="short-url">
              <p ref={shortUrl}>{eachUrl.shortUrl}</p>
              <CopyToClipboard text={eachUrl.shortUrl}>
                <button onClick={(e) => {e.target.classList.add('already-copied'); e.target.innerHTML = 'copied'}}>Copy</button>
              </CopyToClipboard>
            </div>
          </div>
        ))}
      </div>
    </UrlShortnerStyled>
  )
}

export default UrlShortner;