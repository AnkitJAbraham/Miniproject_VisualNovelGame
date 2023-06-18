label level1:
    play music "audio/bustling_city.opus"
    
    "The bustling city of Venice is alive with merchants, sailors, and locals going about their daily business."

    "Antonio is a Noble man and money lender in the city of Venice"

    "He is liked by most of the people in the city, due to his kind nature of lending money at low interest rates"

    "He has a friend named Bassanio who was more like his brother.He would do anything for Bassanio."

    "The story begins with Antonio meeting Bassanio at the Venice harbour"
    
    "Enter Antonio"
    show antonio at Position(xpos=0.7,xanchor=0.7,ypos=0.1,yanchor=0.1) with moveinright:
        yoffset 100
    antonio "Bassanio, my friend, what troubles your mind today?"
    show bassanio at Position(xpos=0.2,xanchor=0.2,ypos=0.1,yanchor=0.1) with moveinleft:
        yoffset 100
    bassanio "Antonio, I find myself in a predicament. I am deeply in debt and seek a loan to woo the beautiful Portia. I plan to travel to Belmont for a chance to win her hand.
    I really need your help"

    antonio "How many ducats do you seek my friend?"
    bassanio "3000"
    menu:
        "help bassanio":
            jump help_bassanio
        "don't help him":
            antonio "Bassanio my friend, my ships are currently at sea with a storm brewing.I am troubled as is and not in a state to help you."
            bassanio "What?.."
            bassanio "I thought you were my friend.."
            return

label help_bassanio:
    antonio "My dear friend, I am at your service." 
    antonio "However, my fortunes are tied up in my merchant ships which are currently at sea."
    antonio "Hence, we must visit another money lender to procure the loan"

    bassanio "Do you have someone particular in mind?"
    menu:
        "Valentino":
            antonio "Valentino is a Catholic moneylender who is sure to provide a low interest rate."
            antonio "We should definitely try visiting him"
            bassanio "Sure"
            jump visit_valentino

        "Shylock":
            antonio "Shylock is a jewish moneylender who may possess that many ducats,though he is 
            known for his shrewd behaviour and on top of that i haven't been in good terms with him"
            antonio "Shall we give him a visit?"
            bassanio "Only if you are okay with that"
            jump visit_shylock


label visit_valentino:
    stop music
    play music "audio/hopeful_music.opus"
    return


label visit_shylock:
    stop music
    play music "audio/hopeful_music.opus"

    scene bg shylocks_office_day
    show shylock at center with fade
    with dissolve

    shylock "What brings you to my doorstep, Antonio? Your ventures are notorious for their risks."

    show antonio at Position(xpos=0.9,xanchor=0.9,ypos=0.1,yanchor=0.1) with moveinright:
        yoffset 100
    show bassanio at Position(xpos=0.2,xanchor=0.2,ypos=0.1,yanchor=0.1) with moveinleft:
        yoffset 100

    antonio "I seek a loan Shylock, of three thousand ducats."

    shylock "Three thousand ducats, well."

    bassanio "Yes, sir, for three months."

    shylock "For three months, well."

    bassanio "Antonio will be the guarantor of the loan."

    shylock "Three thousand ducats for three months, and Antonio will be bound to guarantee the loan.
    Despite risks, he is a sufficient guarantor for the loan."

    shylock "Antonio do you accept these terms? You usually don't lend or borrow with interest do you?And as interest I have decided make it a piece of
    flesh near your heart, I take my interests seriously unlike you."

    $shylock_satisfaction=0
    menu:
        "Agree to all of his terms":
            $shylock_satisfaction+=1
            antonio "Shylock, I normally don't lend or borrow money with interest, but in
            order to help my needy friend, I'll break my custom.Even if it means a
            piece of flesh, I am certain I would have made four times that amount
            anyway by that time."

        "Agree to his terms but decline the interest":
            antonio "Shylock, I normally don't lend or borrow money with interest, I am
            confident that my ships will bring me my fortune back and that an
            interest will not be necessary. I don't wish to pay you interest
            Shylock.I also don't want to risk my life for bassanio."

    shylock "You are a Christian who lends out money without charging interest,
    forcing the merchant to lower their interest rates. You hate Jews and
    speak badly of them.Are you willing to collect the rest of the amount
    from Tubal the wealthy Jew?I can only provide you with half the
    amount now."

    menu:
        "Agree to collect rest of the loan from Tubal":
            $shylock_satisfaction+=1
            antonio "Sure, why not? I'll agree to such a deal, and I'll admit there is much
            kindness in Jews."

        "Demand the entire loan from Shylock":
            antonio "My religious inclinations are strong Shylock,and Tubal is a fanatical
            Jew. I seek the entire amount from you or we shall seek some other
            way."

    shylock "What if you have ill intent, and try to harm me to not pay off the interest?"
    menu:
        "Sign a contract to reassure him":
            $shylock_satisfaction+=1
            antonio "How can you think of me like that Shylock! I am a law abiding
            Christian who would never do such things. If you have any such
            suspicions about me then lets sign a contract that ensures the interest
            is paid whether you are dead or alive to your closest relative."

        "Proceed without signing any contracts":
            antonio "How can you think of me like that Shylock! I am a law abiding
            Christian who would never do such things. If you have any such
            suspicions about me then you are misinformed."
    if(shylock_satisfaction<3):
        shylock "Antonio you have not met my requirements.You shall not be
        guaranteed the loan.I thought your friendship with bassanio meant
        more to you."
    else:
        shylock "Very well, Antonio. We shall draw up the bond. But beware, if you
        default, the bond shall be enforced."
                
