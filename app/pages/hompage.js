import React from 'react';
import Slider from "react-slick";
import ProductShowcase from '../components/product-showcase';

export default class HomePage extends React.Component {
    render(){
        return (
            <div className="home-page">
                <Slider dots={false} infinite={true} autoplay={true} autoplaySpeed={5000} speed={500} slidesToShow={1} slidesToScroll={1} arrows={false}>
                    <img src="https://via.placeholder.com/1100x650/FEE/666?text=IMAGEM+01" />
                    <img src="https://via.placeholder.com/1100x650/EEF/999?text=IMAGEM+02" />
                    <img src="https://via.placeholder.com/1100x650/FEE/666?text=IMAGEM+03" />
                    <img src="https://via.placeholder.com/1100x650/EEF/999?text=IMAGEM+04" />
                    <img src="https://via.placeholder.com/1100x650/FEE/666?text=IMAGEM+05" />
                    <img src="https://via.placeholder.com/1100x650/EEF/999?text=IMAGEM+06" />
                </Slider>

                <section className="section text01">
                    <h1>Bem vindo(a)!</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis cursus leo, at vulputate neque. Donec vel sem quis tortor laoreet vulputate. Integer vehicula eros at aliquam blandit.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis cursus leo, at vulputate neque. Donec vel sem quis tortor laoreet vulputate. Integer vehicula eros at aliquam blandit. 
                    </p>
                </section>

                <section className="section categoria01">
                    <h3>Categoria 01</h3>
                    <Slider dots={false} infinite={true} autoplay={true} autoplaySpeed={4000} speed={500} slidesToShow={2} slidesToScroll={1} arrows={false}>
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/EEF/999?text=PRODUTO+01" name="Produto 01" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$60,00" />
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/FEE/666?text=PRODUTO+02" name="Produto 02" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$80,00" />
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/EEF/999?text=PRODUTO+03" name="Produto 03" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$90,00" />
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/FEE/666?text=PRODUTO+04" name="Produto 04" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$120,00" />
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/EEF/999?text=PRODUTO+05" name="Produto 05" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$460,00" />
                    </Slider>
                </section>

                <div className="section parallax parallax1">
                    <h1>Os melhores produtos com os melhores preços!</h1>
                </div>

                <section className="section categoria01">
                    <h3>Categoria 02</h3>
                    <Slider dots={false} infinite={true} autoplay={true} autoplaySpeed={2500} speed={500} slidesToShow={2} slidesToScroll={1} arrows={false}>
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/EEF/999?text=PRODUTO+01" name="Produto 01" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$60,00" />
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/FEE/666?text=PRODUTO+02" name="Produto 02" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$80,00" />
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/EEF/999?text=PRODUTO+03" name="Produto 03" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$90,00" />
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/FEE/666?text=PRODUTO+04" name="Produto 04" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$120,00" />
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/EEF/999?text=PRODUTO+05" name="Produto 05" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$460,00" />
                        <ProductShowcase cls="item-slider-2-home" image="https://via.placeholder.com/300x300/FEE/666?text=PRODUTO+06" name="Produto 06" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, mauris lobortis luctus suscipit." price="R$460,00" />
                    </Slider>
                </section>

                <section className="section payment">
                    <h1>Compra segura!</h1>
                    <img src="//assets.pagseguro.com.br/ps-integration-assets/banners/seguranca/seguranca_125x125.gif" alt="Banner PagSeguro" title="Compre com PagSeguro e fique sossegado"></img>
                </section>

            </div>
        )
    }
}