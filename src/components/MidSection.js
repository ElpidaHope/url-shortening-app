import { MidSectionStyle } from "../styles/MidSection.styled"

const MidSection = () => {
  return (
    <MidSectionStyle>
      <div className="advance-stats">
        <h1>Advanced Statistics</h1>
        <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
      </div>
      <div className="card-collection">

        <div className="card brand-recognition">
          <img src={`${process.env.PUBLIC_URL}/images/icon-brand-recognition.svg`} alt="" />
          <h1>Brand Recognition</h1>
          <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
        </div>
        <div className="card detailed-records">
          <img src={`${process.env.PUBLIC_URL}/images/icon-detailed-records.svg`} alt="" />
          <h1>Detailed Records</h1>
          <p>Gain insights into  who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>
        <div className="card fully-customizable">
          <img src={`${process.env.PUBLIC_URL}/images/icon-fully-customizable.svg`} alt="" />
          <h1>Fully Customizable</h1>
          <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>
      </div>
    </MidSectionStyle>
  )
}

export default MidSection