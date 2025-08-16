function customReact (Element, Container){
    const DOMElement = document.createElement(Element.type)
    DOMElement.innerHTML=Element.innerHTML
    DOMElement.setAttribute("href", Element.props.href)
    DOMElement.setAttribute("target", Element.props.target)

    Container.appendChild(DOMElement
    )
}

const reactElement = {
    type: "a",
    props : {
        
        href: "https://www.google.com",
        target: "_blanck"
    },
    innerHTML : "click here to visit google"
}
const mainContainer = document.querySelector("#root")

customReact(reactElement, mainContainer)

