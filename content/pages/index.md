---
type: PageLayout
title: Home
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg1.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: SCHMIDT-IT
    subtitle: Wo Webseiten ernst genommen werden.
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-48
          - pl-4
          - pr-4
        flexDirection: row-reverse
        textAlign: left
    type: HeroSection
    actions: []
  - colors: colors-f
    type: FeaturedProjectsSection
    elementId: ''
    actions:
      - type: Link
        label: Alle Projekte
        url: /projekte
        altText: Alle Projekte hier
    showDate: false
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/pages/projects/project-two.md
      - content/pages/projects/project-three.md
      - content/pages/projects/project-one.md
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        textAlign: left
    subtitle: Projekte
  - type: ContactSection
    colors: colors-f
    backgroundSize: full
    title: "Hast du ein interessantes Projekt? Erzähl mir mehr...\U0001F4AC"
    form:
      type: FormBlock
      elementId: sign-up-form
      fields:
        - name: vorname
          label: Vorname
          hideLabel: true
          placeholder: Vorname
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: nachname
          label: Nachname
          hideLabel: true
          placeholder: Nachname
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: E-Mail
          hideLabel: true
          placeholder: E-Mail
          isRequired: true
          width: full
          type: EmailFormControl
      submitLabel: "Submit \U0001F680"
      styles:
        self:
          textAlign: center
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        flexDirection: row
        textAlign: left
---
