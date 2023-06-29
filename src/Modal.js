export default function Modal() {
    return (
    <div id="modalwrap">
        <div className="modalcontent">
            <h2>설명서</h2>
                <div>
                    <p>
                1. 위 게임은 Banker와 Delar의 주사위를 동시에 굴려서 플레이어가 Banker와 Delar의 승, 패 를 예측하는 게임입니다.
                    </p>
                    <br></br>
                    <p>
                2. 플레이어는 Banker의 입장에서 승, 패 를 예측하게 되며 Banker의 주사위가 높을 것 같다면 승리,
                Dealer의 주사위가 높을 것 같다면 패배 배팅에 배팅하시면 됩니다.
                    </p>
                    <br></br>
                    <p>
                3. 플레이어는 기본자금 10코인을 가지고 게임을 시작합니다.
                    </p>
                    <br></br>
                    <p>
                4. 플레이어가 예측한 배팅이 맞으면 플레이어는 배팅한 코인만큼 코인을 얻게되며, 틀리면 배팅한 코인만큼 코인을 잃게 됩니다.
                    </p>
                    <br></br>
                    <p>
                5. 플레이어의 코인이 0이 될시, 게임은 종료됩니다.
                    </p>
                </div>
                <p className="check">
            설명을 모두 확인하였으며 게임을 시작합니다.
                </p>
            <button onClick={()=>document.querySelector('#modalwrap').style.display='none'}>확인</button>
        </div>
        </div>
    )
}