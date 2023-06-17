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

    antonio "I seek a loan, Shylock. I will provide you a pound of my flesh as collateral, and if I fail to repay, you may take it."
    shylock "Very well, Antonio. We shall draw up the bond. But beware, if you default, the bond shall be enforced."