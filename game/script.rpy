define antonio = Character(_("Antonio"), color="#c8c8ff")
define bassanio = Character(_("Bassanio"), color="#c8ffc8")
define shylock = Character(_("Shylock"), color="#c8c8ff")


label start:
    scene bg streets_of_venice
    menu:
        "level 1":
            jump level1
        "level 2":
            pass
        "level 3":
            pass
        "level 4":
            pass
    
    return