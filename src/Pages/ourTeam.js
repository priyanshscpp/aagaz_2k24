import "./style/team.css";
import { Card } from "../Components/Card.js";
import faiz from "./images/faiz.png"
    import namrata from "./images/namrata.jpg"
    import sahil from "./images/sahil technical.jpg"
    import haza from "./images/finance.jpg"
    import sonu from "./images/event sonu.png"
    import ehram from "./images/ehram marketing.jpeg"
    import aryan from "./images/event aryan.jpg"
    import ruchi from "./images/ruchi publicity.jpeg"
    import vikas from "./images/vikas event.jpg"
    import ashutosh from "./images/pr ashutosh.jpg"
    import subodh from "./images/event subodh.jpg"
   
    
function Team() {
  return (
    <div className="App">
        <div style={{gridColumn:"1/-1"}}><h2>Meet Our Team</h2></div>

      <div id="asas">
        <Card
          imgSrc={faiz}
          imgAlt="Card Image 1"
          title="Students Secretary"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
           name="Pathan Faiz"
           
           ilink="https://www.instagram.com/alfai.zu07/"
           llink="https://www.linkedin.com/in/faiz-khan-a08644229/"
           elink="aagaz24official@gmail.com"
           plink="tel:+916393743138"
           
           />
        <Card
          imgAlt="Card Image 2"
          imgSrc={namrata}
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
          name="Namrata"
          ilink="https://www.instagram.com/tishaaachaudhary"
          llink="https://www.linkedin.com/in/namrata-singh-75a88322b/"
          elink="mailto:210113028@hbtu.ac.in"
          title="Students Secretary"
          plink="tel:+919548499530"
        />
        </div>
        <Card
               imgSrc={sahil}

          imgAlt="Card Image 3"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          name="Sahil"
          ilink="https://instagram.com/sahilshakoor786"
          llink="https://in.linkedin.com/in/sahil-shakoor-270091145"
          elink="mailto:sahilshakoor@gmail.com"
          title="Technical Head"
          plink="tel:+916392063720"
        />
      
        <Card
               imgSrc={haza}

          imgAlt="Card Image 1"
          title="Finance Head"
          buttonText="Learn More"
          link="card1"
          name="Haza"
          ilink="https://www.instagram.com/haza_rahman_/"
          llink="https://www.linkedin.com/in/haza-rahman-b5a7b7243/"
          elink="mailto:hazarahma001@gmail.com"
          
          plink="tel:+916392063720"
        />
        <Card
                imgSrc={sonu}

          imgAlt="Card Image 3"
          title="Events Head"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
          name="Sonu"
          ilink="https://www.instagram.com/_sonu_chaudhary_8"
          llink="https://www.linkedin.com/in/sonu-chaudhary-0625a7249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          elink="mailto:mrjatt8741@gmail.com"
          
          plink="tel:+918306122928"
        />
        <Card
          imgAlt="Card Image 3"
          imgSrc={ehram}
          title="Marketing Head"
          description="This is the card description section. You can add more details about the product here"
          link="card2"
          name="Ehram"
          ilink="https://www.instagram.com/ehram07"
          llink="https://in.linkedin.com/in/sahil-shakoor-270091145"
          elink="mailto:ehram003@gmail.com"
        
          plink="tel:+919648061004"
        />

        <Card
                imgSrc={aryan}

                imgAlt="Card Image 3"
                description="This is the card description section. You can add more details about the product here"
                buttonText="Learn More"
                name="Aryan"
                ilink="https://www.instagram.com/ydv_hrk_13"
                llink="http://linkedin.com/in/aryan-yadav-43945b270"
                elink="mailto:yadavaryan0910@gmail.com"
                title="Events Head"
                plink="tel:+919587572188"
              
        />

        <Card
                imgSrc={ruchi}

                imgAlt="Card Image 3"
                description="This is the card description section. You can add more details about the product here"
                buttonText="Learn More"
                name="Ruchi"
                ilink="https://www.instagram.com/ruhisingh1066"
                llink="https://in.linkedin.com/in/sahil-shakoor-270091145"
                elink="mailto:ruchi.singh00002@gmail.com"
                title="Publicity Head"
                plink="tel:+917302340431"
              
        />
        <Card
               imgSrc={vikas}

               imgAlt="Card Image 3"
               description="This is the card description section. You can add more details about the product here"
               buttonText="Learn More"
               name="Vikas"
               ilink="https://www.instagram.com/vikas_kgo"
               llink="https://www.linkedin.com/in/vikas-gupta-6a19b5222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
               elink="mailto:21010073@hbtu.ac.in"
               title="Events Head"
               plink="tel:+916367791036"
             />
        <Card
               imgSrc={ashutosh}

               imgAlt="Card Image 3"
               description="This is the card description section. You can add more details about the product here"
               buttonText="Learn More"
               name="Ashutosh"
               ilink="https://www.instagram.com/ashutosh_singh_sambyal"
               llink="https://www.linkedin.com/in/ashutosh-singh-144020258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
               elink="mailto:divusingh1004@gmail.com"
               title="Public Relations Head"
               plink="tel:+917006535057"
             />
              <Card
               imgSrc={subodh}

               imgAlt="Card Image 3"
               description="This is the card description section. You can add more details about the product here"
               buttonText="Learn More"
               name="Subodh"
               ilink="https://www.instagram.com/subodh_gangwar_/"
               llink="https://www.linkedin.com/in/subodh-gangwar-b33b05165/"
               elink="mailto:sahilshakoor@gmail.com"
               title="Events Head"
               plink="tel:+916392063720"
             />
            

    </div>
  );
}

export default Team;
