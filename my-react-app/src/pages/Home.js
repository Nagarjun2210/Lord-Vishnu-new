import ReactGA from "react-ga4";
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "Home",
      title: "Home"
    });
    console.log("Home page rendered");

  }, []);


  return (
    <div className="Home_container">
      <div className="marginTop"></div>
      <div className="first_para">
                <p>In the basic texts of Hindu religion, according to the most traditional mythology, Vishnu is one of the three main forms of God. In the Puranas, Trimurti Vishnu is said to be the world's champion. The other two forms of Trinity are considered as Brahma and lord Shiva. Where Brahma is considered to be the creator of the universe, Shiva is considered a destroyer.<br/>
                According to Puranas, lord Vishnu's wife is goddess Lakshmi. Lord Vishnu's residence is the Ksheer Sea (Ksheer Sagar). Their bed is above Sheshnag. Kamal is produced from his navel, in which Brahma Ji is located. He holds Padma (Kamal) in his lower left hand, Gada (Comodaki) in his lower right hand, Chacha (Panchjanya) in the left hand, and Chakra (Sudarshan) in his right hand above.<br/>
                </p>
                <img className="lord_vishnu" src={require("./resources/lord_vishnu.jpg")} alt="lord_vishnu"/>
            </div>
            <p>The belief that Vishnu and Shiva and Brahma are basically the same is also very much accepted. Vishnu has been recognized as an incarnation in various forms for the guidance of justice, the destruction of injustice and the direction of life (human) for proper guidance.<br/>
            Whenever there is a crisis on earth, then God avoids that crisis by taking incarnation. Lord Shiva and Lord Vishnu have incarnated on earth many times. It is said about Lord Vishnu's 24th incarnation that he is sure to come in the form of 'Kalki Avatar'. There are 23 incarnations have been incarnated on earth till now. Of these 24 incarnations, 10 incarnations are considered as the main incarnations of Vishnu.<br/>
            This is the fishery avatar, the Kurma incarnation, the Varaha Avatar, Nirshingh Avatar, Vaman Avatar, Parasuram Avatar, Ram Avatar, Krishna Avatar, Buddha Avatar, Kalki Avatar Come know in detail.<br/>
            </p> 
            <img className="avatar" src={require("./resources/lord_Vishnu_avatar.jpg")} alt="lord_Vishnu_avatar"/>
            <h4>Lord Vishnu Maha Mantra</h4>
            <h5>"Om Namo Narayanaya. Om Namo Bhagavate Vasudevaya"<br/>
            (ॐ नमोः नारायणाय. ॐ नमोः भगवते वासुदेवाय)
            </h5>
            <h4>Sankadi muni</h4>
            <p>According to religious texts, at the beginning of the creation, the devotee of Lord Brahma had a great penance with the desire to compose many religions. Pleased with his tenacity, Lord Vishnu embodied the name of the meaning of ascetic and became the embodiment of the four Munis, called eccentric, sanyandan, sanatan and santkumar.<br/>
            From these four times, they were disinterested in the salvation path, engrossed in meditation, and regular and continuous liberation. These are considered to be the first incarnations of Lord Vishnu images.
            </p>
            <h4>Varaha Avatar</h4>
            <p>According to religious texts,Lord Vishnu aarti took the second incarnation in the form of a grave. The story related to the Varaha Avatar is as follows: In the ancient times, when the monster Hiranyakha took the Earth and hid it in the sea, Lord Vishnu appeared in the form of Brahma's nose. Seeing this form of Lord Vishnu, all the Gods and Sages have praised him. At the request of everyone, Lord Varaha started searching for the earth. With the help of their thumb, they found the earth and they brought the earth out of the sea and put them on their teeth.<br/>
            When the monster saw this, he defied the crucifixion of Lord Vishnu for the war. There was a fierce battle between the two. Finally, Lord Varah slaughtered Hirany kashyap. After this, God Varaha stabbed the water with his hooves and installed the earth on it.
            </p>
            <h4>Narada Avatar</h4>
            <p>According to religious texts, Devshi Narada is also the incarnation of Lord Vishnu. According to the scriptures, Narada Muni is one of the seven Mansa sons of Brahma. He has received the post of Goddess with hard penance. They are considered to be one of the devotees of Lord Vishnu. Devshi Narad is always trying to promote religion and public welfare.<br/>
            In the scriptures, Devshi Narada has also been called God's mind. In the 26th verse of the tenth chapter of Shrimad Bhagavatgita, Lord Krishna himself has said in his acceptance of the importance - Dehradunamkarardad:. That is, I am Narada in the Gods.
            </p>
            <h4>Nar-Narayana Avatar</h4>
            <p>At the beginning of creation, Lord Vishnu incarnated in two forms to establish the religion. In this incarnation, he was wearing a jute on his head. Swan in his hands, chakra and thoracic stages: in the place were the signs of Shreevatsa.<br/>
            Their entire dress was similar to the ascetics. According to religious texts, Lord Vishnu took this embodiment in the form of Nar-Narayana.
            </p>
            <h4>Kapil Muni Avatar</h4>
            <p>Lord Vishnu took the fifth avatar as Kapil Muni. His father's name was Maharishi Karam and mother's name was Devuhati. At the time of sacrificing Bhishma's father's body lying on his wife, Bhagwan Kapil was present along with the Vedas, Vyas and the Rishis. Only 60 thousand sons of Raja Sagar were consumed by the anger of Lord Kapil. Lord Kapil is the originator of Sankhya philosophy. Kapil Muni Bhagwat is one of the twelve chiefs of religion.
            </p>
            <h4>Dattatreya Avatar</h4>
            <p>According to religious texts, Dattatreya is also the incarnation of Lord Vishnu. The story of their origin is as follows: Once, Mata Lakshmi, Parvati, and Saraswati were very proud of their patriotism. God created Leela to destroy their haughtiness. According to him, Narada came roaming around Devalka one day and went on alternating the three ladies and said that there is no truth in front of the wife of Atari, Anusuya. The three women told this to their owners and told them to take the test of Anusuya's desecration.<br/>
            Then, Lord Shankar, Vishnu and Brahma monk came to the ashram of Atri Muni by making them vested. Maharishi Atri was not in the ashram at the time All of them demanded alms from the goddess Anasuya but also said that you have to be aloof and begging us. Anusuya was shocked at first hearing it but then, fearing that the sadhus should not be insulted, she remembered her husband and said that if my religion is true, then all these three sadhus will be six-<br/>
            At this, Tridev started weeping after being a child. Then Anusuya took her as a mother and breastfed her breast and began to swing in the palanquin. The gods became disturbed when the three Gods did not return to their place. Narada then came and told the whole story. All the three devils came to Anusuya and apologized. Then Goddess Anasuya made Tridev in her former form. Pleased, Tridev gave him a boon that all three of us will be born from your womb in the form of a son. Then from the part of Brahma, Dattatreya was born from the portions of maa Durga images and Vishnu with the part of the moon, Shankar.
            </p>
            <h4>Yajna avatar</h4>
            <p>The name of the seventh incarnation of Lord Vishnu is the sacrifice. According to religious texts, Lord Yagya was born in Swayambhuvu Manvanthar. Aukutti was born from the womb of Swarambhav Manu's wife Shatarupa. He became the wife of Ruchi Prajapati. Here, Lord Vishnu Yagna came to be known as the name of Lord Vishnu. His grandfather Dakshina was born to a very bright twelve sons. In the Swayambhav Manvantha, they are called the twelve gods named Yama.
            </p>
            <h4>Lord Rishabhdev Avatar</h4>
            <p>Lord Vishnu took the eighth embodiment in the form of Rishabhdev. According to religious texts, there was no child of Maharaj's navel. That is why he sacrificed his devotion to Meru Devi with the wishes of the son. Pleased with the sacrifice, Lord Vishnu himself appeared and gave a boon to Maharaj Nabhi that I will be born as your son.<br/>
            Born in the form of a boon after a long time Lord Vishnu Maharaj was born in Naval. After seeing the beautiful body, Kirti, oil, strength, auspiciousness, success, bravery and bravery of the son, Maharaj Nabhi named him Rishab (the best).
            </p>
            <h4>Adiraj Vidhu Avatar</h4>
            <p>The name of an incarnation of Lord Vishnu is Adara Vidhu. According to the Dharma texts, Prajapati, the body of the organ named Swayam, was married to Sunitha, the mental child of death. He had a son named Wayne. He refused to obey God and said to worship him. Then Maharishi slaughtered him with the mantra Kush.<br/>
            Then Maharishi churned the arms of son-in-law King Wayne, who gave birth to a son of Bidu. Seeing the signs of lotus in the circle and feet in the right hand of the body, the rishis said that the piece of Shri Rari itself has been transcribed in the form of the body.
            </p>
            <h4>Fish Avatar of vishnu</h4>
            <p>According to the Puranas, Lord Vishnu took mice to protect the creation from the catastrophe. Here is the story of this: King of Satyagraha in the form of Virtual Raja Satyavrat was one day bathing in the river and giving Jalanjali. Suddenly a little fish came in his Anjali. They saw the thought back in the ocean, but that fish said - do not put me in the ocean otherwise big fish will eat me. Then King Satyavrat put the fish in his kamandal. When the fish became big, the king kept it in his lake and seeing that the fish became big.<br/>
            The king understood that this is not an ordinary organism. The King prayed to fish in the real form. Lord Vishnu appeared in the presence of the Lord of the Chabhujaadan and he said that this is my mermaid. God said to Satyavratya - Listen to King Satyavrat! There will be a catastrophe seven days from today. Then with my inspiration, a big boat will come to you. You should sit in the subtle body of saints, medicines, seeds, and beings and sit in it when your boat starts to wither, then I will come to you as a fishery.<br/>
            At that time you lock that boat with my horn through Vasuki Nag. At that time, when I ask a question, I will reply to you, which will reveal my glory which is famous by the name of Parabrahma, in your heart. When the time comes, the fisherman Lord Vishnu preached the philosophy of King Satyavrat, which is famous as Matsyapuran.
            </p>
            
            <h4>Kurma avatar</h4>
            <p>According to religious texts, Lord Vishnu assisted in sea churning with the incarnation of karma (turtle). Kurna incarnation of Lord Vishnu is also called tachavav incarnation. The story is as follows- Once Maharishi Durvas cursed King Indra of the gods and cursed them. When Indra went to Lord Vishnu, they asked to churn the ocean. Then Indra got ready to churn the sea together with the gods and the gods, according to Lord Vishnu's saying.<br/>
            Mathani and Nagraj Vasuki were made the leader of the Mandarachal mountain to churn the sea. The gods and the demons forgot their differences, uprooted Mandarachal and led them towards the sea, but they could not take it far enough. Then Lord Vishnu placed Mandarachal on the beach. Devata and the demons made Nagaraj Vasukhi the leader by putting Mandarachal into the sea.<br/>
            But because there was no basis under Mandarachal, he started drowning in the sea. By seeing this, Lord Vishnu became the giant Kuram (turtle) and became the basis of Mandarachal in the sea. Mandaracha started moving fast on the huge back of Lord Curum and thus the sea churning was completed.
            </p>
            <h4>Lord Dhanvantri</h4>
            <p>According to religious texts, when Gods and demons together churned the sea, the first of them was the terrible poison that Lord Shiva consumed. After this, there was a huge horse, goddess Lakshmi, aaravat elephant, Kalp tree, apsaras and many other gems from sea churning. In the end, Lord Dhanvantri came out with nectar urn. This is believed to be the incarnation of Lord Vishnu. They are also considered to be the masters of drugs.</p>
            <h4>Mohini Avatar</h4>
            <p>According to the Dharma texts, during the ocean manthan, in the end, Dhanvantri Amrit came out with a vase. As soon as the nectar found discipline was dissolved. Gods said, we take it, the monks said we take it. In this same trenchant, the son of Indra ran away with Jayant Amrut Kumbh. All the demons and the gods followed him. There was a fierce battle in the Asuras and the gods.<br/>
            Devata got upset and went to Lord Vishnu. Then Lord Vishnu embraced the charm. God has fascinated everyone in the form of Mohini. Mohini listened to Devta and Asur and said that if I give this nectar to the urn, then I will alternate the deity and the Asura to the nectar. Both agreed God sat on one side and Asura on the other side.<br/>
            Then, as a Mohini form, Lord Vishnu started singing a melodious song and dancing to the deities and the asuras. In reality, Mohini Amrit Pan was doing only to the Gods, while Asura understood that he was also drinking nectar. Thus Lord Vishnu performed the blessings of the Gods with the Avatar of Mohini.</p>
            <h4>God Narsingh avatar</h4>
            <p>Lord Vishnu slaughtered King Hiranyakashipu, the King of the Nation with the incarnation of Nrusingh. The story of this incarnation is as follows: According to religious texts, King of the King Hiranyakashipu considered himself to be more powerful than God. It was a boon for humans, gods, birds, animals, neither in the day, nor in the night, nor on the earth, nor in the sky, nor in the sky, nor by death.<br/>
            Whatever was worshiped Lord Vishnu in his kingdom, he was punished. His son's name was Prahlaad. Prahlad was the ultimate devotee of Lord Vishnu from childhood. When Hiranyakshipu came to know of this, he became very angry and tried to convince Prahlad, but even then when he did not consider Prahlad, Hiranyakashipu gave him capital punishment.<br/>
            Every time he survived the miracle of Lord Vishnu. Hiranyakshipu's sister Holika, who had the gift of not burning fire, sat in a flaming fire with Prahlaad. Even then, Prahlad survived by the grace of Lord Vishnu and the Holika was burnt. When Hiranyakashipu was about to kill Prahlad himself, Lord Vishnu appeared in the pillar with the incarnation of Nrusingh and he slaughtered Hiranyakashipu with his nails.</p>
            <h4>Vaman Avatar</h4>
            <p>In Satyayuga, Prahlad's grandson Dnyanraj Bali took control of heaven. All the gods went to Lord Vishnu to avoid this calamity. Then Lord Vishnu said that I myself will be born from the womb of Devmata Aditi and will give you the kingdom of heaven. After some time Lord Vishnu took the Vaman incarnation.<br/>
            Once the sacrificial sacrifice was done, Lord Vaman went to the sacrificial offering and asked for three donations from King Bali to donate the land. Guru Shukracharya of King Bali understood Leela and he refused to donate the sacrifice. But Bali still resolved to donate three steps to God Vaman. Lord Vamana took a huge form and measured the earth in one step and the paradise in the second leg. When no place was left for keeping the third stage, Bali asked Lord Vaman to keep his head on his head.<br/>
            With the stooping of the sacrifice, he reached the spotlight. Seeing the charity's sacrifice, God also made him the lord of the Sulabh Loko. In this way, Lord Vaman helped the gods return them to heaven.</p>
            <h4>Hayagriva avatar</h4>
            <p>According to the Dharma texts, once two powerful monsters named Madhu and Katabh, they lost the Vedas from Brahma and reached the abyss. Brahmaji was very sad due to the defeat of the Vedas, and he came to Lord Vishnu. Then God took a huge embodiment. In this incarnation, Lord Vishnu had a neck and a horse like a horse. Then Lord Haigrah reached the abyss and slaughtered Madhu-Katabh and gave Vedas back to Lord Brahma.</p>
            <h4>Shri hari avatar</h4>
            <p>According to religious texts, in ancient times, a powerful Gajendra lived with his handbills in the valley of the Trikuta mountain. Once she went to take a bath in the pond with her that skins. There a crocodile caught his foot and pulled it into the water. The struggle of Gajendra and crocodile continued for one thousand years. At last, Gajendra fell looser and he meditated on Lord Shri Harri. Upon hearing the praises of Gajendra, Lord Srihari appeared and he slaughtered the crocodile from his own circle. Lord Shriharhi saved Gajendra and made him his counselor.</p>
            <h4>Parasurama Avatar</h4>
            <p>According to Hindu scriptures, Parasurama was one of the chief incarnations of Lord Vishnu. Two stories are prevalent in connection with the birth of Lord Parashuram. According to Harivanshpuran, one story from them is as follows:<br/>
            In ancient times, the powerful Haiyavanshi Kshatriya Kartvarya was the rule of Arjuna (Sahastrabahu) on the city of Vishmasmi. He was very arrogant and tortured too. Once Agnidov urged him to take food. Then Sahastrabahu came in boasting and said that wherever you like, you can get food, it is my rule on all sides. Then Agnidev started burning the forest. In one forest, the sage Apes was doing penance.<br/>
            Agni also burnt his ashram Angered by this, the sage cursed Sahastrabhau, that Lord Vishnu would be born as Parasuram and would not only destroy the Sahastrabhau but also destroy all the Kshatriyas. Thus Lord Vishnu was born as the fifth son of Maharishi Jamadgri in the Bhargava Total.</p>
            <h4>Maharshi Vedvyas Avatar</h4>
            <p>In the Puranas, Maharishi Vedavas has also been considered as part of Lord Vishnu. Lord Vyas was the Kalavatar of Narayana. They appeared in the form of the son of the Mahagani Maharishi Parashar. He was born on the island of Yamuna from the womb of Satyavati, the follower of Cavveraj. The color of his body was black. That's why he had a name Krishnadapayan. In view of the age and power of humans, they divided the Vedas. Therefore they are also called Vedavas. He also composed the Mahabharata textbook.</p>
            <h4>Hansh Avatar</h4>
            <p>Once Lord Brahma was sitting in his meeting. Only then did his Manas son reach Sankadi, and Lord Brahma started discussing the salvation of humans. Then Lord Vishnu appeared in the form of Mahahans and he redressed the suspicions of Sankadi Munis. After this, everyone worshiped Lord Hans. After this Maha Shankarupriya Shri Bhagwan went invisibly to his holy dham.</p>
            <h4>Shri Ram Avatar</h4>
            <p>There was a lot of terror in Rakshasraj Ravan in Tretayuga. Deities too were afraid of him Lord Vishnu took birth in the form of a son from the womb of Mother Kaushalya at King Dasharath for his slaughter. In this incarnation, Lord Vishnu slaughtered many demons and followed his command to live his life.<br/>
            At the behest of the father went into exile. While enjoying the exile, Rakshasraj Ravana took his wife Sita away. In search of Sita, Lord reached Lanka, there was a great battle between Lord Shriram and Ravana in which Ravana was killed. Thus Lord Vishnu took the incarnation of Rama and made the deities fearful.</p>
            <h4>Shri Krishna Avatar</h4>
            <p>In Dwapar Yuga, Lord Vishnu destroyed Shrikrushna incarnation and disobeyed the unrighteous. Lord Krishna was born in the prison. His father's name was Vasudeva and mother's name was Devaki. Lord Krishna images performed many miracles in this incarnation and destroyed the wicked.</p>
            <h4>Buddha Avatar</h4>
            <p>According to religious texts, Gautam Buddha, the originator of Buddhism, was also the incarnation of Lord Vishnu, but Lord Buddha, described in the Puranas, was born in Kakat near the birth of his father and his father's name was told as Ajna. This incident is only of the Buddha, described in Puran Purana.<br/>
            One time the power of the demons has increased too much The gods also started running away from their fears. From the desire of the kingdom, the demons asked Devraj Indra that our empire would remain stable, what is the solution. Then Indra told in the purest sense that for the sustained rule, yajna and insensitive behavior is necessary. Then the monsters started practicing Vedic and Mahayagya, which increased their power. Then all the gods went to Lord Vishnu. Then Lord Vishnu took the form of Buddha for the benefit of the Gods. They had a lot of money in their hands and they used to walk along the path.<br/>
            Thus Lord Buddha approached the monks and taught them that sacrificing yagna is the sin. Yajna creates life violence. How many creatures are consumed by the fire of sacrifice? The demons were influenced by the teachings of Lord Buddha. They stopped sacrificing yagya and Vedic Due to this, their power was reduced and the Gods recovered their kingdom by attacking them.</p>
            <h4>Kalki Avatar</h4>
            <p>According to the scriptures, Lord Vishnu will embody Kalki in Kali Yuga. The Kalki avatar will be in the form of Kaliyug and Satyuga. This incarnation will be of 64 arts. According to the Puranas, in the place of Shambhal of Muradabad district of Uttar Pradesh, Lord Kalki would be born as a son of ascetic Brahmin named Vishnuishasha. Kalki, riding a horse called Devadatta, will destroy the sinners from the world and restore the religion.</p>
            <h4>Why lord Vishnu sits on the snake</h4>
            <p>Every moment of life is related to duties and responsibilities. Of these, family, social and economic duty is the most important. However, in order to fulfill these duties, every person has to make a lot of effort and many problems have to be faced, which are horrifying like the time of Balakshana, and this creates anxiety. The calm face of Lord Vishnu inspires us to stay calm in such difficult conditions. Solving problems can be successfully found only after being calm.</p>
    </div>
  );
};

export default Home;
