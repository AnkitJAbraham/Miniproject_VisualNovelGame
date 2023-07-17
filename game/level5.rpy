define duke= Character(_("Duke"), color="#8a0000")

define stephano= Character(_("Stephano"), color="#87e70a")

image antonio_large:
    "antonio.png"
    zoom 1.3

image portia_balthazar:
    "portia_balthazar.png"
    zoom 1.3

label level5:
    "Meanwhile Jessica discusses her future with Launcelot"
    scene bg portia_house_belmont_day
    "Launcelot enters with jessica"

    show launcelot at Position(xpos=0.9,xanchor=0.9,ypos=0.1,yanchor=0.1) with moveinright:
        yoffset 100
    launcelot "Jessica, my dear, I must speak honestly with you. I fear for
    your safety. The sins of your father are often laid upon his children. It
    weighs heavily on my heart, and I couldn't keep quiet about it. Please, be
    careful and try not to upset anyone. Your well-being is of utmost
    importance to me."

    show jessica_large_inverted at Position(xpos=0.2,xanchor=0.2,ypos=0.1,yanchor=0.1) with moveinleft:
        yoffset 100

    jessica "Launcelot, your worry touches me deeply. I appreciate your
    honesty and concern for my welfare. I will do my best to navigate these
    troubled waters and stay out of harm's way. Thank you for always looking
    out for me."

    jessica "Launcelot, I value your opinion. Given the predicament I find
    myself in, what do you suggest I do to improve my situation? Is there any
    hope for a better future?"

    launcelot "My dear Jessica, I've pondered this question myself. While
    the circumstances may seem bleak, there is one hope that can potentially
    bring about a positive change. You could consider exploring the possibility
    that your father is not your biological father, and therefore, you are not
    bound by the burden of being the Jew's daughter."

    jessica "That is indeed a unique hope, Launcelot. To think that the sins of
    my mother might not be entirely mine to bear. It's a complicated matter,
    for if that were true, it would mean my mother's actions have affected my
    life as well. Nevertheless, it is a glimmer of hope amidst the darkness."

    jessica "Launcelot, I've been pondering my situation and wondering if
    there is a way to alleviate the burden I bear as a Jew's daughter. Perhaps
    conversion to Christianity could offer me a chance to escape the judgment
    and prejudice that comes with my heritage. What are your thoughts on
    this matter?"

    launcelot "Jessica, becoming a Christian is a significant decision, one
    that should not be taken lightly. While it may provide some relief from the
    hardships you face, it is important to remember that true acceptance and
    understanding should come from within. Converting to another faith won't
    instantly erase the challenges, but it may offer you a fresh perspective
    and a chance to find solace in a new community."

    scene bg outside_courtroom
    "The scene shifts to The Court of Justice in Venice where Antonio is being tried"

    scene bg courtroom_interior
    "The Duke of Venice enters along with the Nobles, Antonio, Bassanio, Gratiano, Salerio, and
    others"

    show duke_inverted at Position(xpos=0.2,xanchor=0.2,ypos=0.1,yanchor=0.1) with moveinleft:
        yoffset 100
    duke "Antonio, are you here?"
    show antonio_large at Position(xpos=0.9,xanchor=0.9,ypos=0.1,yanchor=0.1) with moveinright:
        yoffset 100
    antonio "I am here, your grace."
    duke "You face a merciless adversary, incapable of pity. We hoped he
    would show mercy, but he remains cruel. Bring in the Jew."
    hide antonio_large
    show shylock at Position(xpos=0.9,xanchor=0.9,ypos=0.4,yanchor=0.4) with moveinright:
                yoffset 100
    shylock "I demand the penalty as stated in the bond. I will have my
    pound of flesh."

    hide shylock
    show bassanio_large_inverted at Position(xpos=0.9,xanchor=0.9,ypos=0.1,yanchor=0.1) with moveinright:
                yoffset 100
    bassanio "This is not an answer, it's cruel."

    hide bassanio_large_inverted

    show shylock at Position(xpos=0.9,xanchor=0.9,ypos=0.4,yanchor=0.4) with moveinright:
                yoffset 100
    shylock "I have my reasons for seeking this claim. I despise Antonio, and
    that is enough. Are you satisfied?"

    hide shylock

    show portia_balthazar at Position(xpos=0.9,xanchor=0.9,ypos=0.1,yanchor=0.1) with moveinright:
        yoffset 150
    portia "(As Balthazar) The quality of mercy is not forced. It blesses both the giver and
    the receiver. Consider showing mercy, Jew."

    $weight=0
    menu:
        "Try exploring a loophole":
            $weight+=2
            hide duke_inverted
            show lorenzo_right at Position(xpos=0.2,xanchor=0.2,ypos=0.1,yanchor=0.1) with moveinleft:
                yoffset 150
            lorenzo "Lady Portia, your wisdom is commendable, but the law is
            clear about the penalty. Is there no legal way to avoid this predicament?"
            portia "(As Balthazar) An astute observation. The law indeed upholds the bond, but
            perhaps there's a loophole we can explore."
        "Try not to shed any blood":
            $weight+=3
            hide duke_inverted
            show lorenzo_right at Position(xpos=0.2,xanchor=0.2,ypos=0.1,yanchor=0.1) with moveinleft:
                yoffset 150
            "(Lorenzo approaches Portia discreetly.)"
            lorenzo "Lady Portia, may I suggest a way to settle this matter without
            resorting to Shylock's demand?"

            portia "(As Balthazar) I'm all ears. What solution do you propose?"
            lorenzo "What if we find a suitable compromise that satisfies both
            parties without shedding any blood?"
    hide lorenzo_right
    hide portia_balthazar
    show duke_inverted at Position(xpos=0.2,xanchor=0.2,ypos=0.1,yanchor=0.1):
        yoffset 100
    show shylock at Position(xpos=0.9,xanchor=0.9,ypos=0.4,yanchor=0.4):
        yoffset 100
    shylock "I am bound by my oath. I will not relent."

    hide shylock
    show portia_balthazar at Position(xpos=0.9,xanchor=0.9,ypos=0.1,yanchor=0.1) with moveinright:
        yoffset 150
    portia "(As Balthazar) The law allows the pound of flesh, but not a drop of blood. Take
    your fee without shedding blood."

    hide portia_balthazar

    show shylock at Position(xpos=0.9,xanchor=0.9,ypos=0.4,yanchor=0.4):
        yoffset 100

    shylock "I accept. Give me my money."

    hide shylock

    show portia_balthazar at Position(xpos=0.9,xanchor=0.9,ypos=0.1,yanchor=0.1):
        yoffset 150
    portia "There is one more matter. If it is proven that you sought Antonio's
    life, half your wealth goes to the state. Beg for mercy."

    menu:
        "Option 1":
            $weight+=2
            lorenzo "It is only fair, Shylock. You made your oath, and you should
            stick to it."
            shylock "(Grateful) Thank you for understanding. The law is on my
            side, and I shall abide by it."

        "Option 2":
            $weight+=3
            lorenzo "Shylock, mercy and compassion are virtues that can heal
            wounds. Consider showing leniency in this situation."
            shylock "(Contemplative) I... I will think about it. But the debt must be
            repaid."

    duke "You shall have mercy and pay a fine. Sign the deed."

    shylock "I will sign and leave."

    bassanio "We are grateful to you, sir."
    
    antonio "We are forever indebted to you."

    portia "(As Balthazar) I am satisfied. (Notices a cryptic message on the deed.)"

    lorenzo "Lady Portia, it appears there's something hidden in the text
    of the deed. It's a cryptic message, and I believe it may hold a vital clue to
    the truth."

    if(weight>=5):
        #engage in the decryption puzzle
        pass
    else:
        lorenzo "(Decides not to pursue the cryptic message further.) I can't
        see how this will change the situation. Let's continue with the
        proceedings."

    portia "The law allows the pound of flesh, but not a drop of blood. Take
    your fee without shedding blood."

    shylock "I accept. Give me my money."

    portia "There is one more matter. If it is proven that you sought Antonio's
    life, half your wealth goes to the state. Beg for mercy."
        
    shylock "I refuse to beg. I will accept the penalty."

    duke "You shall have mercy and pay a fine. Sign the deed."

    shylock "I will sign and leave."

    bassanio "We are grateful to you, sir."

    antonio "We are forever indebted to you."

    portia "I am satisfied. I must leave now."

    bassanio "Please accept this gift as a token of our gratitude."

    portia "I will take your gloves and this ring. Don't deny me."

    bassanio "I cannot deny you. Take the ring."

    portia "I am content. Farewell."

    antonio "Thank you, sir."

    "PORTIA and NERISSA exit."

    scene bg moonlit_pathway

    "On a moonlit pathway outside Portia's house in Belmont."

    "Lorenzo enters with Jessica"

    lorenzo "On such a night, gentle winds kissed the trees,
    As Troilus sighed for Cressida on the walls.
    Thisbe, careful and tiptoeing in the dew,
    Fled in fear from the lion's shadow."

    jessica "On such a night, Dido stood with a willow branch,
    Waving to her love, beckoning him back to Carthage."

    lorenzo "On such a night, Medea gathered enchanted herbs,
    Reviving old Aeson with their magic."

    jessica "On such a night, I, Jessica, fled my father's house,
    Escaping Venice to be with you in Belmont."

    lorenzo "On such a night, I, Lorenzo, swore love to you,
    Though my vows lacked sincerity."

    jessica "Someone approaches; let's listen."

    "Stephano enters"

    lorenzo "Who comes so fast amid the silent night?"

    stephano "A friend."

    lorenzo "A friend? Your name, friend?"

    stephano "Stephano is my name, and I bring news.
    My mistress will arrive at Belmont before daybreak,
    Praying for a happy marriage by the holy crosses."

    lorenzo "Who accompanies her?"

    stephano "A holy hermit and her maid alone.
    Has my master returned?"

    lorenzo "Not yet, and no word from him.
    Let's go inside, Jessica, and prepare a warm welcome."

    "Launcelot enters"

    launcelot "Sola, sola! Wo ha, ho, sola, sola!"

    lorenzo "Who calls?"

    launcelot "Sola! Have you seen Master Lorenzo?
    Master Lorenzo, sola, sola!"

    lorenzo "Enough shouting; I'm here."

    launcelot "Sola! Where? Where?"

    lorenzo "Here."

    launcelot "A messenger with good news from my master.
    He'll be here before morning."

    "Launcelot Exits"

    lorenzo "Let's go inside, Jessica, and wait for their arrival.
    But wait, I hear footsteps of someone else."

    "Enter Musicians"

    lorenzo "Come, ho! Let's wake Diana with a hymn,
    Music to draw her home."

    "Music plays"

    jessica "I'm never happy when I hear sweet music."

    lorenzo "Your spirits are attentive; music has that effect.
    Even wild and unruly animals become calm with music.
    A man without music in his soul is fit for crimes and deceit."

    "Portia enters with Nerissa"

    portia "The light in my hall is burning.
    How far that little candle throws its beams!
    So shines a good deed in a naughty world."

    nerissa "When the moon shone, we didn't see the candle."

    portia "Greater glory dims lesser ones.
    This candle's light is dimmed by the morning.
    Listen! Music!"

    nerissa "It's your music, madam, from inside the house."

    portia "Nothing is good without a good setting.
    It sounds sweeter at night."

    nerissa "Silence adds virtue to it, madam."

    portia "As the crow sings sweetly as the lark,
    When no one is around to hear it,
    So a greater glory diminishes a lesser one."

    bassanio "Our day will match Australia's and New Zealand's
    If we keep walking around without the sun."

    portia "Let me give light but not make light of marriage.
    Welcome home, my lord."

    bassanio "I thank you, madam. Give welcome to my friend."

    portia "You are very welcome to our house.
    I'll show you this in more ways than words.
    But let's go inside, where you can ask questions,
    And we will answer truthfully."

    "All exit."

    scene bg pure_black
    "END OF LEVEL 5"
    "Thank you for playing Merchant of Venice"
    return 






















