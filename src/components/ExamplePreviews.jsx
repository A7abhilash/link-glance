import React from "react";
import LinkPreviewCard from "./LinkPreviewCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ExamplePreviews() {
  const data = [
    {
      title: "Abhilash M Hadli",
      description: "Student | Developer | Learner | SDE Aspirant",
      thumbnail:
        "https://media-exp1.licdn.com/dms/image/C5616AQGFfy46oNY9Ag/profile-displaybackgroundimage-shrink_350_1400/0/1658632710659?e=1665014400&v=beta&t=Gc0vHVVLeIxT2KYnZKy54U9W62pL_orkvgs4OZW_WXI",
      icon: "./icon.png",
      url: "https://bit.ly/a7abhilash",
    },
    {
      title: "A7abhilash (Abhilash M Hadli) · GitHub",
      description:
        "Turning my ideas into code😃 .  \n\n\n\n\n\n. A7abhilash has 48 repositories available. Follow their code on GitHub.",
      thumbnail: "https://avatars.githubusercontent.com/u/66360717?v=4?s=400",
      url: "https://github.com/A7abhilash",
    },
    {
      title: "Code House - Apps on Google Play",
      description:
        "Find accurate list of programming tutorials that are the splendid & trustworthy.",
      thumbnail:
        "https://play-lh.googleusercontent.com/Fby_o-inaAbVYACxjFFDPYui1twGLSwfRFoccnRpJoK7-qwizljtWOoWwT0Y3bHL_g",
      url: "https://play.google.com/store/apps/details?id=com.a7abhilash.codehouse",
    },
    {
      title: "Track My Attendance - Apps on Google Play",
      description: "Manage your college attendance and never go off the track.",
      thumbnail:
        "https://play-lh.googleusercontent.com/dOBMzes3lJCsIaWMidnr0mq_jtJiEfReYmJOu00kivgMNHRbyl6kpJlXO46Nd4bBSnM",
      url: "https://play.google.com/store/apps/details?id=com.a7abhilash.trackMyAttendance",
    },
    {
      title: "FindCoder | Welcome",
      description:
        "A central location to find coders. Collab or hire coders with no middleman. An open platform to hire coders based on skills and projects. Showcase your work! Participate in challenges and win exciting prizes and goodies. Improve your portfolio and get interview ready with real world knowledge.",
      thumbnail: "https://findcoder.io/logos/fc_logo.png",
      url: "https://www.findcoder.io/",
    },
    {
      title:
        "BRAHMĀSTRA (Kannada) | Kesariya Rangu | Ranbir | Alia | Pritam | Sanjith Hegde, Sid Sriram - YouTube",
      description:
        "#KesariyaRangu #BrahmastraMovie - BRAHMĀSTRA Part One: Shiva (Kannada)Song - Kesariya RanguMusic by PritamSong Name – Kesariya RanguSinger – Sanjith Hegde an...",
      thumbnail: "https://i.ytimg.com/vi/WCDXUgvddR4/hqdefault.jpg",
      url: "https://www.youtube.com/watch?v=WCDXUgvddR4",
    },
    {
      title: "Stack Overflow - Where Developers Learn, Share, & Build Careers",
      description:
        "Stack Overflow | The World’s Largest Online Community for Developers",
      thumbnail:
        "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
      url: "https://stackoverflow.com/",
    },
  ];

  return (
    <div className="row my-5 p-2">
      <div className="col-12 border-bottom">
        <h4 className="text-center">Example Previews</h4>
      </div>
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showIndicators
        showArrows
        // stopOnHover
        swipeable
        animationHandler="slide"
      >
        {data.map((item, index) => (
          <LinkPreviewCard
            key={index + "-example-link-preview-" + index}
            data={item}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default ExamplePreviews;
